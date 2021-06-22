import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { useCreatePostMutation } from "../generated/graphql";
import { createUrqlclient } from "../utils/createUrqlClient";
import { useIsAuth } from "../utils/useIsAuth";

const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [, createPost] = useCreatePostMutation();
  return (
    <Layout variant="regular">
      <Formik
        initialValues={{ title: "", content: "", tickers: "" }}
        onSubmit={async (values) => {
          let _ticker = "";
          values.tickers.split(" ").map((ticker) => {
            _ticker += `$${ticker} `;
          });
          values.tickers = _ticker.trim();
          const { error } = await createPost({ input: values });
          if (!error) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Heading>Create a watchlist</Heading>
            <br />
            <InputField name="title" placeholder="Title" label="Title" />
            <Box mt={6}>
              <InputField
                name="tickers"
                placeholder="Tickers"
                label="Tickers"
              />
              <br />
              <br />
              <InputField name="content" placeholder="Note" label="Note" />
            </Box>
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
