import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import Post from "../components/Post";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlclient } from "../utils/createUrqlClient";

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 25,
    cursor: null as null | string,
  });

  const [{ data, error, fetching }] = usePostsQuery({
    variables,
  });

  console.log(data, error, fetching);

  if (fetching) {
    return <div>Fetching posts..</div>;
  }

  if (error && !fetching) {
    return (
      <div>
        Error msg: {error.message}
        <br />
        Error stack: {error?.stack || "No stack trace"}
      </div>
    );
  }

  if (!fetching && data.posts.posts.length === 0 && !error) {
    return <div style={{ textAlign: "center" }}>No posts were found 😟</div>;
  }

  return (
    <Layout>
      <Flex>
        <Heading flex={4}>Feed - Watchlists</Heading>
        <NextLink href="/create-post">
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Create Watchlist
          </Button>
        </NextLink>
      </Flex>
      <br />
      <br />
      <NextLink href="">
        <Link fontSize="2x">
          <Tooltip
            hasArrow
            label={`Watchlists published within the past 24 hours with the most engagement.`}
            bg="white"
            color="black"
            padding="1em"
            borderRadius="15px"
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
          >
            <b>Trending 🚀</b>
          </Tooltip>
        </Link>
      </NextLink>
      <br />
      <NextLink href="">
        <Link fontSize="2x">
          <Tooltip
            hasArrow
            label={`Most recent watchlists.`}
            bg="white"
            color="black"
            padding="1em"
            borderRadius="15px"
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
          >
            <b>New 🕖</b>
          </Tooltip>
        </Link>
      </NextLink>
      <br />
      <NextLink href="">
        <Link fontSize="2x">
          <Tooltip
            hasArrow
            label={`Watchlists published by creators whom you follow.`}
            bg="white"
            color="black"
            padding="1em"
            borderRadius="15px"
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
          >
            <b>Following 🔔</b>
          </Tooltip>
        </Link>
      </NextLink>
      <br />
      <br />
      <br />
      {data!.posts ? (
        <Stack spacing={12}>
          <Post postObj={data.posts} />
        </Stack>
      ) : (
        <Box>No posts have been publicly published yet 😟</Box>
      )}
      {data.posts && data.posts.hasMore ? (
        <Box textAlign={"center"}>
          <Button
            onClick={() => {
              setVariables({
                limit: variables?.limit,
                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
              });
            }}
            m={8}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Load More Posts
          </Button>
        </Box>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlclient, { ssr: true })(Index);
