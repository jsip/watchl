import { Field, InputType } from "type-graphql";

@InputType()
export class UsernamePassword {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
}
