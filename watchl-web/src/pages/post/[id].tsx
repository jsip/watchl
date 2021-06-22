import { Badge, Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../components/Layout";
import { usePostQuery } from "../../generated/graphql";
import { createUrqlclient } from "../../utils/createUrqlClient";

const Post = ({}) => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  const [{ data, error, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });

  if (fetching) {
    return (
      <Layout>
        <div>Fetching post...</div>
      </Layout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <Heading>Could not find post!</Heading>
        <Box>Are you sure you're knocking the right 🚪?</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box>
        <>
          {data.post.tickers.split(" ").map((ticker) => {
            return (
              <Badge colorScheme="purple" mr={2}>
                {ticker}
              </Badge>
            );
          })}
        </>
        <br />
        <br />
        <Flex>
          <Heading>{data.post.title}</Heading>
        </Flex>
        <br />
        <>{data.post.content}</>
      </Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlclient, { ssr: true })(Post);
