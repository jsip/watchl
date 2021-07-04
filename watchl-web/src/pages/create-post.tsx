import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import TickerTape from "../components/TickerTape";
import { useCreatePostMutation } from "../generated/graphql";
import { createUrqlclient } from "../utils/createUrqlClient";
import { useIsAuth } from "../utils/useIsAuth";

const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [, createPost] = useCreatePostMutation();
  const [wlTickers, setWlTickers] = useState<string>("");
  const [wlTicker, setWlTicker] = useState<string>("");
  const [wlContent, setWlContent] = useState<string>("");
  useEffect(() => {}, [wlTickers, wlTicker]);

  const submitHandler = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };

  const addWlTickers = (e) => {
    if (e.code === "Enter") {
      submitHandler(e);
      setWlTickers((current) => (current += ` $${wlTicker}`));
      setWlTicker("");
    }
  };

  return (
    <Layout variant="regular">
      <Formik
        initialValues={{ title: "", content: "", tickers: "" }}
        onSubmit={async (values) => {
          values.tickers = wlTickers.trim().toUpperCase();
          values.content = wlContent;
          const { error } = await createPost({ input: values });
          if (!error) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Heading>Create a watchlist</Heading>
            <Flex height={12} pt={2} mt={8}>
              <TickerTape tickers={wlTickers}></TickerTape>
            </Flex>
            {/* {wlTicker} */}
            <Flex>
              <InputField
                name="title"
                placeholder="Title"
                label="Title"
                style={{ width: "150%" }}
                onKeyPress={submitHandler}
              />
              <Spacer />
              <InputField
                name="tickers"
                placeholder="Tickers"
                label="Tickers"
                value={wlTicker}
                onChange={(e) => {
                  setWlTicker(e.target.value);
                }}
                onKeyPress={(e) => {
                  addWlTickers(e);
                }}
                style={{ textAlign: "right", width: "45%", float: "right" }}
              />
              <br />
              {/* ajouter timeframe picker */}
              <br />
            </Flex>
            <Textarea
              name="content"
              label="Content"
              placeholder="Content"
              style={{ marginTop: "2%", height: "8rem" }}
              onChange={(e) => {
                setWlContent(e.target.value);
              }}
            />
            <Flex>
              <Button
                type="submit"
                isLoading={isSubmitting}
                mt={12}
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
                Create Watchlist
              </Button>
              {/* ajouter make public ? */}
            </Flex>
          </Form>
        )}
      </Formik>
      <NextLink href="/">
        <Link>Go Back</Link>
      </NextLink>
    </Layout>
  );
};

export default withUrqlClient(createUrqlclient)(CreatePost);
