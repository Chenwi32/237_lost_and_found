import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

const ErrorRoute = () => {
  return (
    <>
      {
        <Head>
          <title>237L&F 404 page</title>
          <meta
            name="description"
            content="237 Lost and Found page page not found (404)"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container minH={"75vh"} mt={20}>
        <Heading fontFamily="Andika">
          Sorry the page doesn't exist &#x1F615;
        </Heading>
      </Container>
    </>
  );
};

export default ErrorRoute;
