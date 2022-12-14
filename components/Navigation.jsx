import Link from "next/link";
import styles from "./styles/Navigation.module.css";

import {  Image, Flex, Button, chakra, Container, Spacer, useMediaQuery, } from '@chakra-ui/react';

import React from "react";
export default function Header() {

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container bg={'brand.700'} boxShadow={'md'} w={'100%'} maxW={'unset'}
    padding={2}  mb={10}>
      <chakra.header maxW={1200} m={'auto'} id="header">
        <Flex w="100%" py="1" alignItems="center" justify="space-between">
          <Link href="/">
            <a>
              <Image alt="logo" src="/images/logo.png" h="50px" />
            </a>
          </Link>
          <Spacer />

          <Flex alignItems={"center"} gap={isLargerThan700 ? 5 : 1}>
            <Link href="/about">
              <Button
                bg={"inherit"}
                _hover={{
                  bg: "brand.200",
                  color: "brand.400",
                }}
                p={2}
              >
                About
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                bg="brand.100"
                color="brand.400"
                _hover={{
                  bg: "brand.200",
                  color: "brand.400",
                }}
                p={2}
              >
                Contact Us
              </Button>
            </Link>

            <Link href="/help">
              <Button
                bg={"inherit"}
                _hover={{
                  bg: "brand.200",
                  color: "brand.400",
                }}
                p={2}
              >
                &#x2753;
              </Button>
            </Link>
          </Flex>
        </Flex>
      </chakra.header>
    </Container>
  );
}