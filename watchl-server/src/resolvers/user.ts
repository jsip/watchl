import { User } from "../entities/User";
import { MainContext } from "src/types";
import {
  Resolver,
  Arg,
  Field,
  Ctx,
  Mutation,
  ObjectType,
  Query,
  FieldResolver,
  Root,
  Int,
} from "type-graphql";
import argon2 from "argon2";
import { COOKIE_NAME, FORGOT_PASSWD_PREFIX } from "../constants";
import { validateRegister } from "../utils/validateRegister";
import { UsernamePassword } from "../utils/usernamePassword";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";
import { getConnection } from "typeorm";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req }: MainContext) {
    if (req.session.userId === user.id) {
      return user.email;
    }
    return "";
  }

  @Mutation(() => UserResponse)
  async resetPassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { redis, req }: MainContext
  ): Promise<UserResponse> {
    if (!newPassword || newPassword.length <= 6) {
      return {
        errors: [
          {
            field: "newPassword",
            message: "Password format is invalid!",
          },
        ],
      };
    }

    const key = FORGOT_PASSWD_PREFIX + token;
    const userId = await redis.get(key);
    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message: "Password reset token has expired!",
          },
        ],
      };
    }

    const userIdInt = parseInt(userId);
    const user = await User.findOne(userIdInt);

    if (!user) {
      return {
        errors: [
          {
            field: "token",
            message: "User associated with token no longer exists!",
          },
        ],
      };
    }

    User.update(
      { id: userIdInt },
      {
        password: await argon2.hash(newPassword),
      }
    );

    await redis.del(key);

    req.session.userId = user.id;

    return { user };
  }
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MainContext
  ) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.error("User not found");
      return true;
    }

    const token = v4();
    await redis.set(
      FORGOT_PASSWD_PREFIX + token,
      user.id,
      "ex",
      1000 * 60 * 60 * 24
    ); // 1 day

    sendEmail(
      email,
      `<a href="http://localhost:3000/reset-password/${token}">Reset password</a>`
    );
    return true;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MainContext) {
    if (!req.session.userId) {
      return null;
    }
    return await User.findOne({ id: req.session.userId });
  }

  @Query(() => User, { nullable: true })
  async user(
    @Arg("username", () => String) username: string
  ): Promise<User | undefined> {
    return await User.findOne({ where: { username } });
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePassword
  ): Promise<UserResponse> {
    const errors = validateRegister(options);
    if (errors) {
      return { errors };
    }

    const hashedPasswd = await argon2.hash(options.password);
    let user;
    try {
      User.create({
        email: options.email,
        username: options.username,
        password: hashedPasswd,
      }).save();
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "Username or email already in use",
            },
          ],
        };
      }
    }
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: MainContext
  ): Promise<UserResponse> {
    const user = await User.findOne(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail.toLowerCase() } }
        : { where: { username: usernameOrEmail.toLowerCase() } }
    );
    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "This username/password is incorrect.",
          },
        ],
      };
    }

    const validatePasswd = await argon2.verify(user.password, password);
    if (!validatePasswd) {
      return {
        errors: [
          {
            field: "password",
            message: "This username/password is incorrect.",
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MainContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
