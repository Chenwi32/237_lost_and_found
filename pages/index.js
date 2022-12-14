import { Button, Container, Heading, HStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Actionmenu from "../components/actionmenu";
import Announcement from "../components/Announcement";
import AvilableDocs from "../components/avilableDocs";

const HomePage = () => {
  return (
    <>
      {
        <Head>
          <title>237L&F home page</title>
          <meta name="description" content="237 Lost and Found home page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container maxW={1200}>
        <Heading textAlign={"center"} mt={10}>
          Welcome to 237 Lost and Found
        </Heading>
        <Heading textAlign={"center"} fontSize={"1.2rem"} mt={5} mb={10}>
          We are here to help you find your lost document.
        </Heading>

        <Announcement
          message={`This platform is still under construction, so you should expect some undesired behaviours, but we promise you the best in the days ahead`}
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
      </Container>
    </>
  );
};

export default HomePage;
