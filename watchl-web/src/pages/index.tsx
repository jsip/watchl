import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { DisAgree } from "../components/DisAgree";
import { Layout } from "../components/Layout";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlclient } from "../utils/createUrqlClient";

const Index = () => {
  let postHeight = "30rem";
  let postHeightier = "45rem";
  let contentSnippetLength = 150;
  let contentSnippetLengthier = 550;

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

  const [displayVoteState, setDisplayVoteState] = useState(false);
  const [postHeightState, setPostHeightState] = useState(postHeight);
  const [snippetLengthState, setSnippetLengthState] = useState(
    contentSnippetLength
  );

  const disagreeHandler = (e: any) => {
    console.log(e);
    setDisplayVoteState((current) => !current);
    setPostHeightState((current) =>
      current == postHeight ? (current = postHeightier) : (current = postHeight)
    );
    setSnippetLengthState((current) =>
      current == contentSnippetLength
        ? (current = contentSnippetLengthier)
        : (current = contentSnippetLength)
    );
  };

  useEffect(() => {}, [displayVoteState, postHeightState, snippetLengthState]);

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
          <b>Trending 🚀</b>
        </Link>
      </NextLink>
      <br />
      <NextLink href="">
        <Link fontSize="2x">
          <b>New 🕖</b>
        </Link>
      </NextLink>
      <br />
      <NextLink href="">
        <Link fontSize="2x">
          <b>Following 🔔</b>
        </Link>
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
            <section key={p.id}>
              <Box
                shadow="md"
                borderWidth="5px"
                boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
                _hover={{
                  borderColor: "blue.100",
                }}
                _focus={{
                  bg: "blue.100",
                }}
                borderColor="blue.50"
                borderRadius="15px"
                p={2}
                mb={4}
              >
                {displayVoteState ? <DisAgree post={p} /> : ""}
                <Grid
                  templateRows="repeat(3, 1fr)"
                  templateColumns="repeat(5, 1fr)"
                  gap={8}
                  p={4}
                  height={postHeightState}
                >
                  <GridItem rowSpan={3} colSpan={2}>
                    <Heading fontSize="3xl">{p.title}</Heading>
                    <Heading fontSize="small" mt={1}>
                      By {p.creator.username}{" "}
                      <ChevronRightIcon ml={0} w={4} h={4} />
                    </Heading>
                    <Text mt={4}>{p.tickers}</Text>
                    <Text mt={8}>
                      {p.contentSnippet}
                      {p.contentSnippet.length < snippetLengthState
                        ? ""
                        : "..."}
                    </Text>
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={3}>
                    <Box>
                      <img
                        src="http://learnpriceaction.com/wp-content/uploads/2018/05/candlestick-charts.png"
                        alt=""
                      />
                    </Box>
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={2}>
                    <Text mt={16} fontSize={"xx-small"}>
                      {p.updatedAt === p.createdAt
                        ? `Posted on ${new Date(
                            parseInt(p.updatedAt)
                          ).toLocaleString()}`
                        : `Last edited on ${new Date(
                            parseInt(p.updatedAt)
                          ).toLocaleString()}`}
                    </Text>
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={2}>
                    <Flex>
                      <Button
                        onClick={(ev) => {
                          disagreeHandler(ev)
                        }}
                        ml={"auto"}
                        mt={12}
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
                        {displayVoteState ? "Read Less" : "Read More"}
                      </Button>
                    </Flex>
                  </GridItem>
                </Grid>
              </Box>
            </section>
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
