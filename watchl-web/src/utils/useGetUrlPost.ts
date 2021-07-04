import { usePostQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetUrlPost = () => {
  const intId = useGetIntId() as any;
  return usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId
    },
  });
};
