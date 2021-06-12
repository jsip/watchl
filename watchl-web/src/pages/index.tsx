import React, { useState } from "react";
import { withUrqlClient } from "next-urql";
import { createUrqlclient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import NextLink from "next/link";

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 15,
    cursor: null as null | string,
  });
  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  if (!fetching && !data) {
    return <div>No posts were found ☹</div>;
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
        <Link fontSize="2x">Trending 🚀</Link>
      </NextLink>
      <br />
      <NextLink href="">
        <Link fontSize="2x">New 🕖</Link>
      </NextLink>
      <br />
      <NextLink href="">
        <Link fontSize="2x">Following 🔔</Link>
      </NextLink>
      <br />
      <br />
      <br />
      {fetching && !data ? (
        <div>
          <h3>Looking for posts...</h3>
        </div>
      ) : (
        <Stack spacing={8}>
          {data.posts.posts.map((p) => (
            <div key={p.id}>
              <Box
                key={p.id}
                shadow="md"
                borderWidth="5px"
                boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
                _hover={{
                  borderColor: "blue.200",
                }}
                _focus={{
                  bg: "blue.200",
                }}
                borderColor="blue.100"
                borderRadius="15px"
                p={8}
                mb={4}
                minH="12rem"
              >
                <Heading fontSize="2xl">{p.title}</Heading>
                <Heading fontSize="small" mt={1}>
                  By {p.creator.username}
                </Heading>
                <Text mt={4}>{p.tickers}</Text>
                <Text mt={8}>
                  {p.contentSnippet}
                  {p.contentSnippet.length < 150 ? "" : "..."}
                </Text>
                <Flex>
                  <Button
                    ml={"auto"}
                    mt={8}
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
                    Read More
                  </Button>
                </Flex>
                <Text mt={4} fontSize={"xx-small"}>
                  {p.updatedAt === p.createdAt
                    ? `Posted on ${new Date(
                        parseInt(p.updatedAt)
                      ).toLocaleString()}`
                    : `Last edited on ${new Date(
                        parseInt(p.updatedAt)
                      ).toLocaleString()}`}
                </Text>
              </Box>
            </div>
          ))}
        </Stack>
      )}
      {data && data.posts.hasMore ? (
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
