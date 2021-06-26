import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Spacer,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React, { useEffect, useState } from "react";
import { DisAgree } from "../../components/DisAgree";
import InfoTabs from "../../components/InfoTabs";
import { Layout } from "../../components/Layout";
import PostOpts from "../../components/PostOpts";
import TickerTape from "../../components/TickerTape";
import { createUrqlclient } from "../../utils/createUrqlClient";
import { useGetUrlPost } from "../../utils/useGetUrlPost";

const Post = () => {
  
  const [{ data, error, fetching }] = useGetUrlPost();
  const [activeTicker, setActiveTicker] = useState<string>("");

  const changeActiveTicker = (newTicker: string): string => {
    setActiveTicker(newTicker);
    return activeTicker;
  };

  useEffect(() => {}, [activeTicker]);

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
      <Box
        shadow="md"
        borderWidth="5px"
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
        _hover={{
          borderColor: "blue.100",
        }}
        borderColor="blue.50"
        borderRadius="25px"
        p={8}
      >
        <Flex>
          <DisAgree post={data.post as any} />
          <Box fontSize="small">
            <Heading>{data.post.title}</Heading>
            <Tooltip
              textAlign="center"
              label={`
                    ${data.post.creator.username}
                    #${data.post.creator.id}
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
                By {data.post.creator.username}{" "}
                <ChevronRightIcon ml={0} w={4} h={4} />
              </Heading>
            </Tooltip>
          </Box>
        </Flex>
        <br />
        <TickerTape
          tickers={data.post.tickers}
          changeActiveTicker={changeActiveTicker}
        />
        <br />
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
                Industrials
              </Tooltip>
            </Badge>
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
                Cash Cows and Dividend Payers
              </Tooltip>
            </Badge>
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
                1-3 Months
              </Tooltip>
            </Badge>
          </Flex>
        </Box>
        <br />
        <>{data.post.content}</>
        <Box margin="auto" mt={12}>
          <InfoTabs ticker={activeTicker} size={"lg"} />
        </Box>
        <Flex>
          <Spacer />
          <Box>
            <PostOpts p={data.post} />
          </Box>
        </Flex>
        <Box>
          <Heading>Comments</Heading>
          <Textarea mt={8} colorScheme="twitter"></Textarea>
        </Box>
      </Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlclient, { ssr: true })(Post);
