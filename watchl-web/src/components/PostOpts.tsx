import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Menu,
  MenuButton, MenuItem, MenuList
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

const PostOpts = ({ p }) => {
  const [{ data: meData }] = useMeQuery();

  const [delConfirmationIsOpen, setdelConfirmationIsOpen] = React.useState(
    false
  );
  const onClose = () => setdelConfirmationIsOpen(false);
  const cancelRef = React.useRef();
  const [, deletePost] = useDeletePostMutation();

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<ChevronDownIcon />} p={4}>
        <Box fontSize={"xx-small"}>
          {p.updatedAt === p.createdAt
            ? `Posted on ${new Date(parseInt(p.updatedAt)).toLocaleString()}`
            : `Last edited on ${new Date(
                parseInt(p.updatedAt)
              ).toLocaleString()}`}
        </Box>
      </MenuButton>
      <MenuList
        backgroundColor="white"
        border="none"
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
        p={2}
      >
        {meData?.me?.id !== p.creator.id ? null : (
          <Box>
            <MenuItem
              onClick={() => {
                setdelConfirmationIsOpen(true);
              }}
            >
              Delete
              <AlertDialog
                isOpen={delConfirmationIsOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                motionPreset="slideInBottom"
                isCentered
              >
                <AlertDialogOverlay>
                  <AlertDialogContent backgroundColor="white">
                    <AlertDialogHeader>Delete Customer</AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          onClose();
                          deletePost({ id: p.id });
                        }}
                        ml={3}
                      >
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </MenuItem>
            <MenuItem>
              <NextLink href="/post/edit/[id]" as={`/post/edit/${p.id}`}>
                Edit
              </NextLink>
            </MenuItem>
          </Box>
        )}
        <MenuItem>Report</MenuItem>
        <br />
        <Box p={2}>Edit History</Box>
        <Box>
          <Box fontSize="small" ml={6}>
            First published on{" "}
            {new Date(parseInt(p.createdAt)).toLocaleString()}
          </Box>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default PostOpts;
