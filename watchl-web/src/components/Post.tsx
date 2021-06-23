import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Fade,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link, Text,
  Tooltip
} from "@chakra-ui/react";
import NextLink from "next/link";
import { default as React, useEffect, useState } from "react";
import {
  Post as PostType, usePostsQuery
} from "../generated/graphql";
import { DisAgree } from "./DisAgree";
import InfoTabs from "./InfoTabs";
import PostOpts from "./PostOpts";
import TickerTape, { ticker } from "./TickerTape";

const Post = ({ postObj }) => {
  let postHeight = "30rem";
  let postHeightier = "30rem";
  let contentSnippetLength = 200;
  let contentSnippetLengthier = 550;
  let voteBool = false;

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
  return postObj.map((p: PostType) =>
    !p ? null : (
      <Box
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
                <TickerTape tickers={p.tickers} />
              </GridItem>
              <GridItem rowSpan={1}>
                <Box>
                  {displayVoteState ? (
                    <Fade in={displayVoteState}>
                      <DisAgree post={p} />
                    </Fade>
                  ) : (
                    ""
                  )}
                </Box>
                <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                  <Link>
                    <Heading
                      fontSize="3xl"
                      maxW="20vw"
                      isTruncated
                      lineHeight="3.5rem"
                    >
                      {p.title}
                    </Heading>
                  </Link>
                </NextLink>
                <Tooltip
                  textAlign="center"
                  label={`
                    ${p.creator.username}
                    #${p.creator.id}
                  `}
                  bg="white"
                  color="black"
                  w="container.md"
                  padding="1em"
                  borderRadius="15px"
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                >
                  <Heading
                    fontSize="small"
                    _hover={{
                      cursor: "pointer",
                    }}
                  >
                    By {p.creator.username}{" "}
                    <ChevronRightIcon ml={0} w={4} h={4} />
                  </Heading>
                </Tooltip>
              </GridItem>
              <GridItem rowSpan={3} mt={3}>
                <Text>
                  {p.contentSnippet}
                  {p.contentSnippet.length < snippetLengthState ? "" : "..."}
                </Text>
              </GridItem>
              <GridItem rowSpan={1}>
                <Box>
                  <Flex>
                    <Badge
                      mr={2}
                      variant="solid"
                      backgroundColor="#4299e1"
                      color="white"
                      _hover={{
                        color: "blue.700",
                        cursor: "pointer",
                      }}
                    >
                      <Tooltip
                        hasArrow
                        label={`
																	Industrials // 
																	Value Companies // 
																	Cyclical & Volatile Cash Flow Unicorns // 
																	Growth Companies // 
																	Strong, Predictable Cash Flows
																		- Pricing in Market Expectations // 
																	Cash Cows and Dividend Payers // 
																	Timeframe // 
																	Technical Alerts
																`}
                        bg="white"
                        color="black"
                        padding="1em"
                        borderRadius="15px"
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                      >
                        Tags
                      </Tooltip>
                    </Badge>
                  </Flex>
                </Box>
              </GridItem>
              <GridItem rowSpan={4} mt={2}>
                <Box
                  borderLeft="4px solid gainsboro"
                  pl={4}
                  _hover={{
                    borderLeft: "4px solid #4299e1",
                    cursor: "pointer",
                  }}
                >
                  <Heading
                    fontSize="large"
                    mb={3}
                    color="gray.500"
                    _hover={{
                      color: "gray.600",
                    }}
                  >
                    See what people are saying{" "}
                    <ChevronRightIcon></ChevronRightIcon>
                  </Heading>
                  <Box mb={1}>
                    <Text
                      fontWeight="500"
                      fontSize="medium"
                      color="gray.500"
                      _hover={{
                        color: "gray.600",
                      }}
                    >
                      Segun Adebayo
                      <Badge ml="1" colorScheme="red">
                        Controversial
                      </Badge>
                    </Text>
                    <Text fontSize="sm">I disagree, this is dumb.</Text>
                  </Box>
                  <Box>
                    <Text
                      fontWeight="500"
                      fontSize="medium"
                      color="gray.500"
                      _hover={{
                        color: "gray.600",
                      }}
                    >
                      Kanye West
                      <Badge ml="1" colorScheme="green">
                        Most Liked
                      </Badge>
                    </Text>
                    <Text fontSize="sm">Great picks, Peter!</Text>
                  </Box>
                </Box>
              </GridItem>

              <GridItem rowSpan={1}>
                <PostOpts p={p} />
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
              <GridItem rowSpan={9} textAlign="center" fontSize="2xl" pt={3}>
                <InfoTabs ticker={ticker} size={""} />
              </GridItem>
              <GridItem p={6} rowSpan={1}>
                <Flex justify="flex-end">
                  <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                    <Link>
                      <Button
                        // onClick={(ev) => {
                        //   disagreeHandler(ev);
                        // }}
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
                        Read More
                      </Button>
                    </Link>
                  </NextLink>
                </Flex>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    )
  );
};

export default Post;
