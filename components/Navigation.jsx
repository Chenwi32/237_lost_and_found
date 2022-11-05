import Link from "next/link";
import styles from "./styles/Navigation.module.css";

import {  Image, Flex, Button, chakra, Container, Spacer } from '@chakra-ui/react';

import React from "react";
export default function Header() {
  return (
    <Container maxW="1200px">
      <chakra.header id="header">
        <Flex w="100%" py="1" align="center" justify="space-between">
          <Link href="/">
            <a>
              <Image alt="logo" src="/images/logo.png" h="50px" />
            </a>
          </Link>
          <Spacer />

          <Flex align={"center"}>
            <Link href="/contact">
              <Button bg="brand.100" color='brand.400' _hover='brand.500'>Contact Us</Button>
            </Link>
            <Link href="/help">
              <a className={styles.menu_links}>&#x2753;</a>
            </Link>
          </Flex>
        </Flex>
      </chakra.header>
    </Container>
  );
}