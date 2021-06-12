import React from "react";
import { Form, Formik } from "formik";
import { Box, Button, Heading, Link } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import toErrorMap from "../utils/toErrorMap";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { withUrqlClient } from "next-urql";
import { createUrqlclient } from "../utils/createUrqlClient";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant="regular">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values });
          console.log(router);
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Heading>Create your Account</Heading>
            <br />
            <InputField
              name="username"
              placeholder="Username"
              label="Username"
            />
            <Box mt={8}>
              <InputField
                name="email"
                placeholder="Email"
                label="Email"
                type="Email"
              />
            </Box>
            <Box mt={8}>
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="Password"
              />
            </Box>
            <Button
              type="submit"
              isLoading={isSubmitting}
              mt={8}
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <br />
      <NextLink href="/login">
        <Link>Already have an account? Login</Link>
      </NextLink>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlclient)(Register);
