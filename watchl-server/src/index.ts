import "reflect-metadata";
import { COOKIE_NAME, POSTGRES_PASSWD, __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { createConnection } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import path from "path";
import { DisAgree } from "./entities/DisAgree";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: "watchlDB",
    username: "postgres",
    password: POSTGRES_PASSWD,
    logging: true,
    synchronize: true,
    entities: [Post, User, DisAgree],
    migrations: [path.join(__dirname, "./migrations/**")],
  });

  await conn.runMigrations();
  // await Post.delete({});

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

  app.use(cors(corsOptions));

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 3.154e11, // 10yrs - 1 day
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: "sector A to B",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redis }),
  });

  // const post = orm.em.create(Post, {title: 'Watchlist', content: '$WEED, $DE'});
  // orm.em.persistAndFlush(post);

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("Server started on *:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
