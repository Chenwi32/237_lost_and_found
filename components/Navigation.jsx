import Link from "next/link";
import styles from "./styles/Navigation.module.css";

import {  Image, Flex, Button, chakra, Container, Spacer, color } from '@chakra-ui/react';

import React from "react";
export default function Header() {
  return (
    <Container maxW="1200px">
      <chakra.header id="header">
        <Flex w="100%" py="1" alignItems="center" justify="space-between">
          <Link href="/">
            <a>
              <Image alt="logo" src="/images/logo.png" h="50px" />
            </a>
          </Link>
          <Spacer />

          <Flex alignItems={"center"} gap={5}>
            
            <Link href="/about">
              <Button bg={'inherit'} _hover={{
                bg: 'brand.101',
                color: 'brand.400'
              }}>
              About
              </Button> 
            </Link>

            <Link href="/contact">
              <Button bg="brand.100" color='brand.400' _hover={{ bg:'brand.500'}}>Contact Us</Button>
            </Link>
            
            <Link href="/help">

              <Button bg={'inherit'} _hover={{
                bg: 'brand.101',
                color: 'brand.400'
              }}>
                &#x2753;
              </Button>
              
            </Link>

            
          </Flex>
        </Flex>
      </chakra.header>
    </Container>
  );
}