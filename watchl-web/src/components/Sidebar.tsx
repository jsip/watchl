import { Stack, Box, Link, Heading } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const Sidebar = ({}) => {
  return (
    <Stack
      spacing={"12"}
      align="flex-start"
      backgroundColor="white"
      position="fixed"
      pr="12"
    >
      <Box p={4}>
        <ul style={{ listStyle: "none" }}>
          <Stack spacing="8" mt="4" align="stretch">
            <li>
              <NextLink href="/">
                <Link>
                  <Heading size="md" color="#2D3748">
                    Feed
                  </Heading>
                </Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/">
                <Link>
                  <Heading size="md" color="#2D3748">
                    My Watchlists
                  </Heading>
                </Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/">
                <Link>
                  <Heading size="md" color="#2D3748">
                    Favorites
                  </Heading>
                </Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/">
                <Link>
                  <Heading size="md" color="#2D3748">
                    Social Display
                  </Heading>
                </Link>
              </NextLink>
            </li>
          </Stack>
          <Stack spacing="6" mt="64" pt="64" align="stretch">
            <li>
              <NextLink href="/">
                <Link>
                  <Heading size="md" color="#2D3748">
                    Integrations & API
                  </Heading>
                </Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/">
                <Link>
                  <Heading size="md" color="#2D3748">
                    Settings
                  </Heading>
                </Link>
              </NextLink>
            </li>
          </Stack>
        </ul>
      </Box>
    </Stack>
  );
};

export default Sidebar;
