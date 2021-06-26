import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";

export type WrapperVariant = "small" | "regular";
interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Flex>
      <Sidebar />
      <Box
        mt={8}
        mx="auto"
        maxW={variant === "regular" ? "60rem" : "20rem"}
        w="100%"
      >
        {children}
      </Box>
    </Flex>
  );
};
