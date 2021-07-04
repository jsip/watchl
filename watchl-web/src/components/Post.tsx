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
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { default as React, useEffect, useState } from "react";
import { Post as PostType, usePostsQuery } from "../generated/graphql";
import { DisAgree } from "./DisAgree";
import InfoTabs from "./InfoTabs";
import PostOpts from "./PostOpts";
import TickerTape from "./TickerTape";
import useLocalStorage from "../utils/useLocalStorage";

interface PostProps {
  postObj?: any;
  creatorId?: number;
}

const Post: React.FC<PostProps> = ({ postObj, creatorId }) => {
  console.log(postObj, creatorId);
  const [localStorageTicker, setLocalStorageTicker] = useLocalStorage<String>(
    "ticker"
  );

  let ticker = localStorageTicker
    ? localStorageTicker
    : "Select a ticker to view data -";

  const [variables, setVariables] = useState({
    limit: 25,
    cursor: null as null | string,
    creatorId: creatorId || null,
  });

  const [{ data, error, fetching }] = usePostsQuery({
    variables,
  });

  const [activeTicker, setActiveTicker] = useState(ticker);

  const changeActiveTicker = (newTicker) => {
    setLocalStorageTicker(newTicker);
    setActiveTicker(newTicker);
    return newTicker;
  };

  useEffect(() => {}, [activeTicker]);

  const post = data.posts.posts.map((p: PostType) =>
    !p ? null : (
      <Box
        key={p.id}
        // shadow="md"
        borderWidth="5px"
        // boxShadow={"1px 0px 15px -5px rgb(66 153 225 / 50%)"}
        _hover={{
          borderColor: "blue.100",
        }}
        borderColor="blue.50"
        borderRadius="25px"
        h={"32rem"}
        minHeight={"32rem"}
        maxHeight={"32rem"}
      >
        <Grid
          templateColumns="45% 55%"
          h={"32rem"}
          minHeight={"32rem"}
          maxHeight={"32rem"}
        >
          <GridItem>
            <Grid p={6} h={"32rem"} minHeight={"32rem"} maxHeight={"32rem"}>
              <GridItem rowStart={1} rowEnd={1}>
                <TickerTape
                  tickers={p.tickers}
                  changeActiveTicker={changeActiveTicker}
                />
              </GridItem>
              <GridItem rowStart={2} rowEnd={3}>
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
                    <NextLink
                      href="/user/[username]"
                      as={`/user/${p.creator.username}`}
                    >
                      <Link>By {p.creator.username} </Link>
                    </NextLink>
                    <ChevronRightIcon ml={0} w={4} h={4} />
                  </Heading>
                </Tooltip>
              </GridItem>
              <GridItem rowStart={3} rowEnd={6} mt={2}>
                <Text>
                  {p.contentSnippet}
                  {p.contentSnippet.length < 150 ? "" : "..."}
                </Text>
              </GridItem>
              <GridItem rowStart={6} rowEnd={10}>
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
              <GridItem rowStart={10} rowEnd={12}>
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

              <GridItem rowStart={12}>
                <PostOpts p={p} />
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem>
            <Grid
              templateRows="repeat(12, 1fr)"
              h={"32rem"}
              minHeight={"32rem"}
              maxHeight={"32rem"}
            >
              <GridItem
                rowStart={1}
                rowEnd={10}
                textAlign="center"
                fontSize="2xl"
                pt={3}
              >
                <InfoTabs ticker={activeTicker} size={""} />
              </GridItem>
              <GridItem p={6} rowStart={12} rowEnd={12}>
                <Flex justify="flex-end">
                  <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                    <Link>
                      <Button
                        // onClick={(ev) => {
                        //   disagreeHandler(ev);
                        // }}
                        ml={"auto"}
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
  return <>{post}</>;
};

export default Post;
