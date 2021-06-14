import {
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";
import { Wrapper, WrapperVariant } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  let { isOpen, onClose, onOpen } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <>
      <NavBar />
      {/* <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
