import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/InputField";
import { Layout } from "../../../components/Layout";
import {
  usePostQuery,
  useUpdatePostMutation,
} from "../../../generated/graphql";
import { createUrqlclient } from "../../../utils/createUrqlClient";
import { useGetIntId } from "../../../utils/useGetIntId";

const EditPost = ({}) => {
  const router = useRouter();
  const intId = useGetIntId() as any;
  const [{ data, error, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
  const [, updatePost] = useUpdatePostMutation();
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
    <Layout variant="regular">
      <Formik
        initialValues={{
          title: data.post.title,
          content: data.post.content,
          tickers: data.post.tickers,
        }}
        onSubmit={async (values) => {
          await updatePost({ id: intId, ...values });
          router.back();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Heading>Edit a watchlist</Heading>
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
                Edit Watchlist
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

export default withUrqlClient(createUrqlclient)(EditPost);
