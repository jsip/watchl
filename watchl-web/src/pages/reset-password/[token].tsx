import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../components/InputField";
import { Wrapper } from "../../components/Wrapper";
import toErrorMap from "../../utils/toErrorMap";
import NextLink from "next/link";
import { createUrqlclient } from "../../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useResetPasswordMutation } from "../../generated/graphql";

const ResetPassword: NextPage = () => {
  const router = useRouter();
  const [, resetPassword] = useResetPasswordMutation();
  const [tokenError, setTokenError] = useState("");
  return (
    <div>
      <Wrapper variant="small">
        <Formik
          initialValues={{ newPassword: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await resetPassword({
              newPassword: values.newPassword,
              token:
                typeof router.query.token === "string"
                  ? router.query.token
                  : "",
            });
            if (response.data?.resetPassword.errors) {
              const errorMap = toErrorMap(response.data.resetPassword.errors);
              if ("token" in errorMap) {
                setTokenError(errorMap.token);
              } else {
                setErrors(errorMap);
              }
            } else if (response.data?.resetPassword.user) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <h1>Reset your Password</h1>
              <br />
              <InputField
                name="newPassword"
                placeholder="New Password"
                label="Reset Password"
                type="Password"
              />
              {tokenError ? (
                <Box>
                  <Box style={{ color: "red" }}>{tokenError}</Box>
                  <br />
                  <NextLink href="./forgot-password">
                    <Link>Get new token</Link>
                  </NextLink>
                </Box>
              ) : (
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  colorScheme="teal"
                  mt={8}
                >
                  Reset Password
                </Button>
              )}
            </Form>
          )}
        </Formik>
        <NextLink href="/login">
          <Link>Login</Link>
        </NextLink>
      </Wrapper>
    </div>
  );
};

export default withUrqlClient(createUrqlclient, { ssr: false })(ResetPassword);
