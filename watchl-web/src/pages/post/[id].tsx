import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { Router } from "next/router";
import React from "react";
import { DisAgree } from "../../components/DisAgree";
import InfoTabs from "../../components/InfoTabs";
import { Layout } from "../../components/Layout";
import PostOpts from "../../components/PostOpts";
import TickerTape, { ticker } from "../../components/TickerTape";
import { createUrqlclient } from "../../utils/createUrqlClient";
import { useGetUrlPost } from "../../utils/useGetUrlPost";

const Post = ({}) => {
  const [{ data, error, fetching }] = useGetUrlPost();

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
        <TickerTape tickers={data.post.tickers} />
        <br />
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
        <>{data.post.content}</>
        <Box margin="auto" mt={12}>
          <InfoTabs ticker={ticker} size={"lg"} />
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
