import Link from "next/link";

import {
  Image,
  Flex,
  Button,
  chakra,
  Container,
  useMediaQuery,
  Icon,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
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
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const [userCha, setUserCha] = useState("");

  useEffect(() => {
    if (user.email !== null) {
      const string = user.email.toString();
      const firstTwo = string.substring(0, 2);
      setUserCha(firstTwo);
    }
  }, [user]);

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
      bg={"brand.600"}
      boxShadow={"md"}
      w={"100%"}
      maxW={"unset"}
      padding={isLargerThan700 ? 2 : 1}
      mb={10}
      position={"sticky"}
      top={0}
      zIndex={2}
      fontFamily="Roboto"
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
            <Image
              cursor={"pointer"}
              alt="logo"
              src="/images/logo.png"
              h="50px"
            />
          </Link>

          <Flex
            alignItems={"center"}
            gap={isLargerThan700 ? 2 : 1}
            fontSize={isLargerThan700 ? "initial" : "0.5rem"}
            display={isLargerThan700 ? "inherit" : "none"}
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
              <Menu >
                <MenuButton
                  _hover={{
                    bg: "",
                  }}
                  _active={{
                    bg: "",
                  }}
                  bg={"brand.400"}
                  color="brand.600"
                  as={Button}
                  
                >
                  {userCha.toUpperCase()}
                </MenuButton>
                <MenuList zIndex={2}>
                  <MenuItem zIndex={10} onClick={onOpen}>Log Out</MenuItem>
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

          <Menu>
            <MenuButton
              display={isLargerThan700 ? "none" : "block"}
              as={Button}
              bg={"inherit"}
              color="brand.500"
              _hover={{
                bg: "",
              }}
              _active={{
                bg: "",
              }}
              fontSize="2xl"
            >
              <HamburgerIcon />
            </MenuButton>

            <MenuList p={5} minW={"97vw"} minH="80vh" boxShadow={"xl"} mt={10}>
              <MenuGroup title="Profile">
                {user.uid ? (
                  <Menu>
                    <MenuButton
                      bg={"inherit"}
                      as={Button}
                      _hover={{
                        bg: "inherit",
                      }}
                      _active={{
                        bg: "inherit",
                      }}
                      p={0}
                      mb={5}
                      ml={"1rem"}
                    >
                      <Flex>
                        <Text
                          bg={"brand.400"}
                          color="brand.600"
                          p={"0.3rem 0.5rem"}
                          borderRadius="lg"
                          _hover={{
                            bg: "brand.400",
                          }}
                        >
                          {userCha.toUpperCase()}
                        </Text>

                        <ChevronDownIcon />
                      </Flex>
                    </MenuButton>
                    <MenuList p={0} minW={"unset"} w={"fit-content"}>
                      <MenuGroup>
                        <MenuItem onClick={onOpen}>Log Out</MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                ) : (
                  <Link href="/signup">
                    <MenuItem
                      _hover={{
                        bg: "inherit",
                      }}
                    >
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
                    </MenuItem>
                  </Link>
                )}
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Menu">
                <Link href="/feeds">
                  <MenuItem
                    _hover={{
                      bg: "inherit",
                    }}
                  >
                    Feeds
                  </MenuItem>
                </Link>
                <Link href="/about">
                  <MenuItem
                    _hover={{
                      bg: "inherit",
                    }}
                  >
                    About
                  </MenuItem>
                </Link>
                <Link href="/contact">
                  <MenuItem
                    _hover={{
                      bg: "inherit",
                    }}
                  >
                    Contact
                  </MenuItem>
                </Link>
                <Link href="/help">
                  <MenuItem
                    _hover={{
                      bg: "inherit",
                    }}
                  >
                    FAQ
                  </MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </chakra.header>
    </Container>
  );
}
