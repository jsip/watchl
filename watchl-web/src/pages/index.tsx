import {
  ChevronDownIcon,
  ChevronRightIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { DisAgree } from "../components/DisAgree";
import { Layout } from "../components/Layout";
import { useDeletePostMutation, usePostsQuery } from "../generated/graphql";
import { createUrqlclient } from "../utils/createUrqlClient";

const Index = () => {
  let postHeight = "30rem";
  let postHeightier = "30rem";
  let contentSnippetLength = 150;
  let contentSnippetLengthier = 550;
  let voteBool = false;

  const [variables, setVariables] = useState({
    limit: 15,
    cursor: null as null | string,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const [, deletePost] = useDeletePostMutation();

  if (!fetching && !data) {
    return <div>No posts were found ☹</div>;
  }

  const [displayVoteState, setDisplayVoteState] = useState(voteBool);
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
          <Tooltip
            hasArrow
            label={`Most liked watchlists`}
            bg="white"
            color="black"
            padding="10em"
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
          {data.posts.posts.map((p) => !p ? null : (
            <LinkBox
              key={p.id}
              shadow="md"
              borderWidth="5px"
              boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
              _hover={{
                borderColor: "blue.100",
              }}
              borderColor="blue.50"
              borderRadius="25px"
              h={postHeightState}
              minHeight={postHeightState}
              maxHeight={postHeightState}
            >
              <Grid
                templateColumns="repeat(2, 1fr)"
                h={postHeightState}
                minHeight={postHeightState}
                maxHeight={postHeightState}
              >
                <GridItem>
                  <Grid
                    templateRows="repeat(10, 1fr)"
                    p={6}
                    h={postHeightState}
                    minHeight={postHeightState}
                    maxHeight={postHeightState}
                  >
                    <GridItem rowSpan={1}>
                      <Flex alignContent="right">
                        {p.tickers.split(" ").map((ticker) => {
                          return (
                            <Badge colorScheme="purple" mr={2}>
                              {ticker}
                            </Badge>
                          );
                        })}
                      </Flex>
                    </GridItem>
                    <GridItem rowSpan={1}>
                      <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                        <LinkOverlay>
                          {/* {displayVoteState ? <DisAgree post={p} /> : ""} */}
                          <Heading fontSize="2xl" maxW="20vw" isTruncated>
                            {p.title}
                          </Heading>
                          <Heading fontSize="small" mt={1}>
                            By {p.creator.username}{" "}
                            <ChevronRightIcon ml={0} w={4} h={4} />
                          </Heading>
                        </LinkOverlay>
                      </NextLink>
                    </GridItem>
                    <GridItem rowSpan={2} mt={3}>
                      <Text>
                        {p.contentSnippet}
                        {p.contentSnippet.length < snippetLengthState
                          ? ""
                          : "..."}
                      </Text>
                    </GridItem>
                    <GridItem rowSpan={1} mt={3}>
                      <Box>
                        <Flex>
                          <Badge
                            mr={2}
                            variant="solid"
                            backgroundColor="#4299e1"
                            color="white"
                          >
                            Anchored VWAP
                          </Badge>
                          <Badge
                            mr={2}
                            variant="solid"
                            backgroundColor="#4299e1"
                            color="white"
                          >
                            Growth
                          </Badge>
                          <Badge
                            variant="solid"
                            backgroundColor="#4299e1"
                            color="white"
                          >
                            50MA
                          </Badge>
                        </Flex>
                      </Box>
                    </GridItem>
                    <GridItem rowSpan={4} mt={4}>
                      <Heading fontSize="large" mb={3}>
                        See what people are saying{" "}
                        <ChevronRightIcon></ChevronRightIcon>
                      </Heading>
                      <Box pl={1} mb={1}>
                        <Text fontWeight="500" fontSize="medium">
                          Segun Adebayo
                          <Badge ml="1" colorScheme="red">
                            Controversial
                          </Badge>
                        </Text>
                        <Text fontSize="sm">
                          What a stupid fucking take LMAO
                        </Text>
                      </Box>
                      <Box pl={1}>
                        <Text fontWeight="500" fontSize="medium">
                          Kanye West
                          <Badge ml="1" colorScheme="green">
                            Most Liked
                          </Badge>
                        </Text>
                        <Text fontSize="sm">Great stocks, Peter!</Text>
                      </Box>
                    </GridItem>
                    <GridItem rowSpan={1}>
                      <Menu>
                        <MenuButton
                          as={Button}
                          leftIcon={<ChevronDownIcon />}
                          p={0}
                        >
                          <Text fontSize={"xx-small"}>
                            {p.updatedAt === p.createdAt
                              ? `Posted on ${new Date(
                                  parseInt(p.updatedAt)
                                ).toLocaleString()}`
                              : `Last edited on ${new Date(
                                  parseInt(p.updatedAt)
                                ).toLocaleString()}`}
                          </Text>
                        </MenuButton>
                        <MenuList backgroundColor="white">
                          <MenuItem
                            onClick={() => {
                              deletePost({ id: p.id });
                            }}
                          >
                            Delete
                          </MenuItem>
                          <MenuItem>Edit</MenuItem>
                        </MenuList>
                      </Menu>
                    </GridItem>
                  </Grid>
                </GridItem>

                <GridItem>
                  <Grid
                    templateRows="repeat(10, 1fr)"
                    h={postHeightState}
                    minHeight={postHeightState}
                    maxHeight={postHeightState}
                  >
                    <GridItem rowSpan={9}>
                      <Box w="90%" m="auto">
                        <img
                          src="https://i.gyazo.com/6fbfea9f2352b16610cb5c2e88f4481a.png"
                          alt=""
                        />
                      </Box>
                    </GridItem>
                    <GridItem p={6} rowSpan={1}>
                      <Box as="a">
                        <Flex>
                          <Button
                            onClick={(ev) => {
                              disagreeHandler(ev);
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
                      </Box>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </LinkBox>
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
