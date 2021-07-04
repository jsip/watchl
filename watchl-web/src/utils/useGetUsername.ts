import { useRouter } from "next/router";

export const useGetUsername = (): String => {
  const router = useRouter();
  const username = router.query.username;
  return username as string;
};
