import { Box } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Layout } from "../../components/Layout";
import { createUrqlclient } from "../../utils/createUrqlClient";
import { useGetUsername } from "../../utils/useGetUsername";

const Group = () => {
  const username = useGetUsername();
  return (
    <Layout>
      <Box
        shadow="md"
        borderWidth="5px"
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
        _hover={{
          borderColor: "blue.100",
        }}
        borderColor="blue.50"
        borderRadius="25px"
        p={8}
      >
        {username}
      </Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlclient, { ssr: true })(Group);
