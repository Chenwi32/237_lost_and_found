import Link from "next/link";
import styles from "./styles/Navigation.module.css";

import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';

import React from "react";
export default function Header() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Link href="/">
          <a>
            <Image src="/images/logo.png" h="50px" />
          </a>
        </Link>

        <HStack as="nav" spacing="5">
          <Link href="/contact">
            <Button variant="nav">
              
              <span className={`${styles.navbar_btn} `}>Contact Us</span>
            </Button>
          </Link>
          <Link href="#">
            
              <a className={styles.menu_links}>&#x2753;</a>
            
          </Link>
        </HStack>
       
      </Flex>
    </chakra.header>
  );
}