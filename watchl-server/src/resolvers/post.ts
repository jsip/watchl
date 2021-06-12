import { DisAgree } from "../entities/DisAgree";
import { MainContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { MAX_CONTENT_LENGTH } from "../constants";
import { Post } from "../entities/Post";
import { isAuth } from "../middleware/isAuth";
@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  content: string;
  @Field()
  tickers: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: Boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  contentSnippet(@Root() root: Post) {
    return root.content.slice(0, MAX_CONTENT_LENGTH);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg("postId", () => Int) postId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MainContext
  ) {
    const isDisAgree = value !== -1;
    const _value = isDisAgree ? 1 : -1;
    const { userId } = req.session;
    await getConnection().query(
      `
      START TRANSACTION;

      INSERT into dis_agree ("userId", "postId", value)
      values (${userId},${postId},${_value});

      UPDATE post
      SET points = points + ${_value}
      WHERE id = ${postId};

      COMMIT;
    `
    );
    return true;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
    // @Info() info: any
  ): Promise<PaginatedPosts> {
    const _limit = Math.min(50, limit);
    const _limitPlusOne = _limit + 1;

    const replacements: any[] = [_limitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const posts = await getConnection().query(
      `
      SELECT p.*, 
      json_build_object(
        'id', u.id,
        'username', u.username,
        'email', u.email,
        'updatedAt', u."updatedAt",
        'createdAt', u."createdAt"
      ) creator
      FROM post p
      INNER JOIN public.user u ON u.id = p."creatorId"
      ${cursor ? `WHERE p."createdAt" < $2` : ""}
      ORDER by p."createdAt" DESC
      LIMIT $1
    `,
      replacements
    );

    return {
      posts: posts.slice(0, _limit),
      hasMore: posts.length === _limitPlusOne,
    };
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id") id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MainContext
  ): Promise<Post> {
    return Post.create({
      ...input,
      creatorId: req.session.userId,
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Arg("content", () => String, { nullable: true }) content: string
  ): Promise<Post | null> {
    const post = await Post.findOne(id);
    if (!post) {
      return null;
    }
    if (typeof title !== "undefined" && typeof content !== "undefined") {
      Post.update({ id }, { title, content });
    }
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: number): Promise<Boolean> {
    await Post.delete(id);
    return true;
  }
}
