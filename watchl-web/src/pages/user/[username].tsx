import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import Post from "../../components/Post";
import TickerTape from "../../components/TickerTape";
import { usePostsQuery } from "../../generated/graphql";
import { createUrqlclient } from "../../utils/createUrqlClient";
import { useGetUrlUser } from "../../utils/useGetUrlUser";

const User = () => {
  const [
    { data: userData, error: userError, fetching: userFetching },
  ] = useGetUrlUser();

  const [variables, setVariables] = useState({
    limit: 15,
    cursor: null as null | string,
    creatorId: userData.user.id,
  });

  const [{ data, error, fetching }] = usePostsQuery({
    variables,
  });

  if (userFetching) {
    return (
      <Layout>
        <div>Fetching user...</div>
      </Layout>
    );
  }

  if (fetching) {
    return (
      <Layout>
        <div>Fetching user posts...</div>
      </Layout>
    );
  }

  if (userError) {
    return (
      <Layout>
        <div>{userError.message}</div>;
      </Layout>
    );
  }

  if (!userData?.user) {
    return (
      <Layout>
        <Heading>Could not find user!</Heading>
        <Box>Are you sure you're knocking the right 🏠?</Box>
      </Layout>
    );
  }

  const userProfile = (
    <Layout>
      <Box
        shadow="md"
        borderWidth="5px"
        _hover={{
          borderColor: "blue.100",
        }}
        borderColor="blue.50"
        borderRadius="25px"
        p={8}
      >
        <Box textAlign="center">
          <Avatar size="2xl" name={userData.user.username} />
          <br />
          <br />
          <Heading>Display Name</Heading>
          <span>
            @{userData.user.username}#{userData.user.id}
          </span>
        </Box>
        <br />
        <br />
        <Grid templateColumns="repeat(2, 1fr)" gap={8} mb={8}>
          <GridItem>
            <Text fontWeight="600">About Display Name</Text>
            <Text>
              Short description about myself. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Dolor, odio tempore! Inventore harum
              ex sunt ipsa incidunt animi quod saepe excepturi facere officia!
              Dolore obcaecati error exercitationem reiciendis veniam est culpa
              inventore odit aperiam vitae!
            </Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="600" mb={1}>
              Favorite Tickers
            </Text>
            <TickerTape tickers={"$TSLA $BB $AMC"} />
            <br />
            <div style={{ opacity: 0.75 }}>
              <Flex>
                Watchlist Likes&nbsp;<b>83.7k</b>
              </Flex>
              <Flex>
                Followers&nbsp;<b>13.4k</b>&nbsp;-&nbsp;Following&nbsp;<b>74</b>
              </Flex>
            </div>
          </GridItem>
        </Grid>
      </Box>
      <Flex mt={8} mb={8}>
        <Heading fontSize="x-large">Most Recent Watchlists</Heading>
        <Spacer />
        <Text>Filter</Text>
      </Flex>
      <Box mb={8}>
        {!data ? (
          <Box>
            We could not find anything on our end.. Try something different.
          </Box>
        ) : data.posts.posts.length === 0 ? (
          <Box>This user has no public posts yet.</Box>
        ) : (
          <Stack spacing={12}>
            <Post postObj={data.posts.posts} creatorId={userData.user.id} />
          </Stack>
        )}
        {data && userData && data.posts.hasMore ? (
          <Box textAlign={"center"}>
            <Button
              onClick={() => {
                setVariables({
                  limit: variables?.limit,
                  cursor:
                    data.posts.posts[data.posts.posts.length - 1].createdAt,
                  creatorId: userData.user.id,
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
              Load More User Posts
            </Button>
          </Box>
        ) : null}
      </Box>
    </Layout>
  );
  return userProfile;
};

export default withUrqlClient(createUrqlclient, { ssr: true })(User as any);
