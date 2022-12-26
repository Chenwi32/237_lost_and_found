import Link from "next/link";

import {
  Image,
  Flex,
  Button,
  chakra,
  Container,
  useMediaQuery,
  Icon,
  HStack,
  VStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./authcontprov";
import { useRouter } from "next/router";

export default function Header() {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const [userCha, setUserCha] = useState('')

  
  useEffect(() => {
  
  if (user.email !== null) {
    const string = user.email.toString();
    const firstTwo = string.substring(0, 2);
    setUserCha(firstTwo);
  }
}, [user])


  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container
      bg={"brand.700"}
      boxShadow={"md"}
      w={"100%"}
      maxW={"unset"}
      padding={isLargerThan700 ? 2 : 1}
      mb={10}
    >
      <chakra.header maxW={1200} m={"auto"} id="header">
        <Flex
          gap={1}
          w="100%"
          py="1"
          alignItems="center"
          justify="space-between"
        >
          <Link href="/">
            <a>
              <Image alt="logo" src="/images/logo.png" h="50px" />
            </a>
          </Link>

          <Flex
            alignItems={"center"}
            gap={isLargerThan700 ? 2 : 1}
            fontSize={isLargerThan700 ? "initial" : "0.5rem"}
          >
            <Link href="/feeds">
              <Button
                bg={"inherit"}
                color={"brand.400"}
                _hover={{
                  bg: "brand.200",
                }}
                p={isLargerThan700 ? 2 : 1}
                fontSize={isLargerThan700 ? "initial" : "0.8rem"}
              >
                Feeds
              </Button>
            </Link>
            <Link href="/about">
              <Button
                bg={"inherit"}
                color={"brand.400"}
                _hover={{
                  bg: "brand.200",
                }}
                p={isLargerThan700 ? 2 : 1}
                fontSize={isLargerThan700 ? "initial" : "0.8rem"}
              >
                About
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                bg={"inherit"}
                color={"brand.400"}
                _hover={{
                  bg: "brand.200",
                }}
                p={isLargerThan700 ? 2 : 1}
                fontSize={isLargerThan700 ? "initial" : "0.8rem"}
              >
                Contact
              </Button>
            </Link>

            <Link href="/help">
              <Button
                bg={"inherit"}
                color="brand.400"
                _hover={{
                  bg: "brand.200",
                }}
                p={isLargerThan700 ? 2 : 1}
                fontSize={isLargerThan700 ? "initial" : "0.8rem"}
              >
                <Icon p={0}>
                  <FontAwesomeIcon icon={faQuestion} />
                </Icon>
              </Button>
            </Link>
            {user.uid ? (
              
                <Menu  >
                  <MenuButton
                    as={Button}
                    bg={"brand.400"}
                    color="brand.600"
                    p={"0.3rem 0.5rem"}
                    borderRadius="lg"
                    _hover={{
                      bg: "brand.400",
                    }}
                  
                  >
                    {userCha}
                  </MenuButton>

                  <MenuList p={0} minW={'unset'} w={'fit-content'} >
                    <MenuGroup>
                      <MenuItem fontSize={'1.1rem'}  onClick={onOpen}>Log Out</MenuItem>
                      </MenuGroup>
                   </MenuList>
                
                </Menu>
            ) : (
              <Link href="/signup">
                <Button
                  bg="brand.100"
                  color="brand.400"
                  _hover={{
                    bg: "brand.200",
                  }}
                  p={2}
                  fontSize={isLargerThan700 ? "initial" : "0.8rem"}
                >
                  Sign Up
                </Button>
              </Link>
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton
                  color={"brand.400"}
                  _hover={{
                    bg: "brand.200",
                  }}
                />
                <ModalBody>
                  <Text>Are you sure you want to Log out?</Text>
                </ModalBody>

                <ModalFooter display={"flex"} justifyContent="space-between">
                  <Button
                    color={"brand.400"}
                    bg={"brand.200"}
                    _hover={{
                      bg: "brand.100",
                    }}
                    mr={3}
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      onClose();
                      handleLogout();
                    }}
                    _hover={{
                      bg: "brand.200",
                    }}
                    bg={"brand.100"}
                    color={"brand.400"}
                  >
                    Yes
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </chakra.header>
    </Container>
  );
}
