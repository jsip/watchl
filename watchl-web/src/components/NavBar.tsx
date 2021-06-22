import { Box, Button, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { serverStateObs } from "../utils/serverStateObs";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: serverStateObs(),
  });
  let navbar = null;

  if (fetching) {
  } else if (!data?.me) {
    navbar = (
      <>
        <NextLink href="/login">
          <Button
            mr={4}
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
            <Link>Login</Link>
          </Button>
        </NextLink>
        <NextLink href="/register">
          <Button
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
            <Link>Register</Link>
          </Button>
        </NextLink>
      </>
    );
  } else {
    navbar = (
      <Flex align="center">
        <Box mr={4}>
          <b>{data.me.username}</b>
        </Box>
        <Button
          onClick={async () => {
            await logout();
          }}
          isLoading={logoutFetching}
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
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="white" p={4}>
      <Flex flex={1} m="auto" align="center">
        <NextLink href="/">
          <Link>
            <Heading size="2xl" color="#2D3748">
              watchl.
            </Heading>
          </Link>
        </NextLink>
        <Spacer />
        <Box ml={"auto"}>{navbar}</Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
