import { useUserQuery } from "../generated/graphql";
import { useGetUsername } from "./useGetUsername";

export const useGetUrlUser = () => {
  const username = useGetUsername() as any;
  const user = useUserQuery({
    variables: {
      username,
    },
  });
  return user;
};
