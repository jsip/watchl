import React from "react";
import { Form, Formik } from "formik";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import toErrorMap from "../utils/toErrorMap";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { withUrqlClient } from "next-urql";
import { createUrqlclient } from "../utils/createUrqlClient";

export const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant="regular">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            if (typeof router.query.next === "string") {
              router.push(router.query.next);
            } else {
              router.push("/");
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Heading>Login to your Account</Heading>
            <br />
            <InputField
              name="usernameOrEmail"
              placeholder="Username or Email"
              label="Username or Email"
            />
            <Box mt={6}>
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="Password"
              />
              <Flex>
                <NextLink href="/forgot-password">
                  <Link ml="auto" mt="1">
                    Forgot Password?
                  </Link>
                </NextLink>
              </Flex>
              {/* <InputField
                name="confirmPassword"
                placeholder="Confirm Password"
                label=""
                type="Password"
              /> */}
            </Box>
            <Button
              type="submit"
              isLoading={isSubmitting}
              mt="12"
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <br />
      <NextLink href="/register">
        <Link>No Account Yet? Register</Link>
      </NextLink>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlclient)(Login);
