import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface DisAgreeProps {
  post: PostSnippetFragment;
}

export const DisAgree: React.FC<DisAgreeProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<
    "agree-loading" | "disagree-loading" | "not-loading"
  >("not-loading");
  const [, vote] = useVoteMutation();
  return (
    <>
      <Box float="left" pr={4}>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <ChevronUpIcon
            onClick={async () => {
              setLoadingState("agree-loading");
              await vote({
                postId: post.id,
                value: 1,
              });
              setLoadingState("not-loading");
            }}
            _hover={{
              // color: "green.400",
              color: "blue.500",
            }}
            color={post.voteStatus === 1 ? "green.300" : undefined}
            isloading={loadingState === "agree-loading" ? 0 : 1}
            aria-label="Agree"
            w={6}
            h={6}
          />
          {post.points}
          <ChevronDownIcon
            onClick={async () => {
              setLoadingState("disagree-loading");
              await vote({
                postId: post.id,
                value: -1,
              });
              setLoadingState("not-loading");
            }}
            color={post.voteStatus === -1 ? "red.300" : undefined}
            isloading={loadingState === "disagree-loading" ? 0 : 1}
            aria-label="Disagree"
            w={6}
            h={6}
            _hover={{
              color: "red.500",
            }}
          />
        </Flex>
      </Box>
    </>
  );
};
