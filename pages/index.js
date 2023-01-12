import { Box, Button, Container, Heading, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Actionmenu from "../components/actionmenu";
import Announcement from "../components/Announcement";
import AvilableDocs from "../components/avilableDocs";
import Cta from "../components/cta";

const HomePage = () => {

   const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <>
      {
        <Head>
          <title>237L&F home page</title>
          <meta name="description" content="237 Lost and Found home page" />
          <meta
            name="google-site-verification"
            content="xs39n7Ir_oqjJtD6C39rsAdCqz9DUEPpFVdb8cJjufE"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container maxW={1200}>
        <HStack p={3} w={"100%"} justifyContent={"flex-end"} mb={10}>
          <Link href="/signup">
            <Button
              bg={"brand.100"}
              color={"brand.400"}
              _hover={{
                bg: "brand.200",
                color: "brand.400",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </HStack>
        <Heading textAlign={"center"} mt={10}>
          Welcome to 237 Lost and Found
        </Heading>
        <Heading textAlign={"center"} fontSize={"1.2rem"} mt={5} mb={10}>
          We are here to help you find your lost document.
        </Heading>

        <Announcement
          message={`This platform is still under construction, so you should expect some undesired behaviours, but we promise you the best in the days ahead`}
          type={"warning"}
        />

        <Actionmenu />

        <AvilableDocs />

        <HStack p={3} w={"100%"} justifyContent={"flex-end"} mb={10}>
          <Link href="/feeds">
            <Button
              bg={"brand.100"}
              color={"brand.400"}
              _hover={{
                bg: "brand.200",
                color: "brand.400",
              }}
            >
              View more
            </Button>
          </Link>
        </HStack>

        <Box
          w={"100%"}
          display={isLargerThan700 ? "none" : "block"}
          bg="brand.400"
          h={"1px"}
          mb={10}
        >
          {" "}
        </Box>

        <Cta />
      </Container>
    </>
  );
};

export default HomePage;
