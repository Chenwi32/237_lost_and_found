import Link from "next/link";
import styles from "./styles/Navigation.module.css";

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
} from "@chakra-ui/react";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./authcontprov";
import { useRouter } from "next/router";


export default function Header() {

   const { user, logOut } = useAuth();
   const router = useRouter();

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  
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
                Contact Us
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
            {user.uid ?
              <VStack>

                <Text>{ user.email}</Text>
                <Button
              bg="brand.100"
              color="brand.400"
              _hover={{
                bg: "brand.200",
              }}
              p={2}
              fontSize={isLargerThan700 ? "initial" : "0.8rem"}
              onClick={handleLogout}
            >
              Log Out
            </Button> 
              </VStack>:  <Link href="/signup">
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
            }

           
          </Flex>
        </Flex>
      </chakra.header>
    </Container>
  );
}
