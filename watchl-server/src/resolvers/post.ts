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
import { DisAgree } from "../entities/DisAgree";
import { Post } from "../entities/Post";
import { User } from "../entities/User";
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

  @FieldResolver(() => User)
  creator(@Root() post: Post, @Ctx() { userLoader }: MainContext) {
    return userLoader.load(post.creatorId);
  }

  @FieldResolver(() => Int, { nullable: true })
  async voteStatus(
    @Root() post: Post,
    @Ctx() { disAgreeLoader, req }: MainContext
  ) {
    if (!req.session.userId) {
      return null;
    }
    const disAgree = await disAgreeLoader.load({
      postId: post.id,
      userId: req.session.userId as number,
    });
    return disAgree ? disAgree.value : null;
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

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    console.log("sessid", req.session.userId);

    const posts = await getConnection().query(
      `
      SELECT p.*
      FROM post p
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
  post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
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
