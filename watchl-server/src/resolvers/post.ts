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

    const disagrees = await DisAgree.findOne({ where: { postId, userId } });

    if (disagrees && disagrees.value !== _value) {
      await getConnection().transaction(async (tm) => {
        await tm.query(
          `
          UPDATE dis_agree
          SET value = ${_value}
          WHERE "postId" = ${postId} AND "userId" = ${userId}
        `
        );
        await tm.query(
          `
            UPDATE post
            SET points = points + ${2 * _value}
            WHERE id = ${postId}
          `
        );
      });
    } else if (!disagrees) {
      await getConnection().transaction(async (tm) => {
        await tm.query(
          `
          INSERT into dis_agree ("userId", "postId", value)
          values (${userId}, ${postId}, ${_value})
        `
        );
        await tm.query(
          `
          UPDATE post
          SET points = points + ${_value}
          WHERE id = ${postId}
        `
        );
      });
    }
    return true;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null,
    @Ctx() { req }: MainContext
  ): Promise<PaginatedPosts> {
    const _limit = Math.min(50, limit);
    const _limitPlusOne = _limit + 1;

    const replacements: any[] = [_limitPlusOne];

    if (req.session.userId) {
      replacements.push(req.session.userId);
    }

    let cursorIndex = 3;
    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
      cursorIndex = replacements.length;
    }

    console.log("sessid", req.session.userId);

    const posts = await getConnection().query(
      `
      SELECT p.*, 
      json_build_object(
        'id', u.id,
        'username', u.username,
        'email', u.email,
        'updatedAt', u."updatedAt",
        'createdAt', u."createdAt"
      ) creator,
      ${
        req.session.userId
          ? `(SELECT value FROM dis_agree WHERE "userId" = $2 AND "postId" = p.id) "voteStatus"`
          : 'null as "voteStatus"'
      }
      FROM post p
      INNER JOIN public.user u ON u.id = p."creatorId"
      ${cursor ? `WHERE p."createdAt" < $${cursorIndex}` : ""}
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
  post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id, { relations: ["creator"] });
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
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg("id", () => Int) id: number,
    @Arg("title") title: string,
    @Arg("content") content: string,
    @Arg("tickers") tickers: string,
    @Ctx() { req }: MainContext
  ): Promise<Post | null> {
    const response = await getConnection()
      .createQueryBuilder()
      .update(Post)
      .set({ title, content, tickers })
      .where('id = :id AND "creatorId" = :creatorId', {
        id,
        creatorId: req.session.userId,
      })
      .returning("*")
      .execute();
    console.log(response);
    return response.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MainContext
  ): Promise<Boolean> {
    const post = await Post.findOne(id);
    if (!post) {
      return false;
    }
    if (post.creatorId !== req.session.userId) {
      throw new Error("You are not the author of this post!");
    }
    await DisAgree.delete({ postId: id });
    await Post.delete({ id });
    return true;
  }
}
