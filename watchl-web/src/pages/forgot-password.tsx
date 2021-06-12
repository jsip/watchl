import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { createUrqlclient } from "../utils/createUrqlClient";
import NextLink from "next/link";
import { useForgotPasswordMutation } from "../generated/graphql";

export const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              You will receive an email to reset your password if an account
              exists.
            </Box>
          ) : (
            <Form>
              <h1>Reset your Password</h1>
              <br />
              <Box mt={6}>
                <InputField
                  name="email"
                  placeholder="Email"
                  label="Email"
                  type="email"
                />
              </Box>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                type="submit"
                isLoading={isSubmitting}
                mt={12}
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
                Reset Password
              </Button>
            </Form>
          )
        }
      </Formik>
      <br />
      <NextLink href="/login">
        <Link>Go back</Link>
      </NextLink>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlclient)(ForgotPassword);
