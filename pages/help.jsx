import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";

const Help = () => {
  return (
    <>
      {
        <Head>
          <title>237L&F help page</title>
          <meta name="description" content="237 Lost and Found help page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container maxW="1200px" minH={"70vh"}>
        <Box>
          <Heading>FAQ</Heading>

          <Accordion pt={6} allowToggle allowMultiple>
            <AccordionItem mb={4}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Do you have a mobile application?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                We don't have a mobile application yet, but we are already
                working on it. It will soon be made available on mobile app
                stores. In the mean time, please just keep making use of this
                web version and sharing the link to get more people to know
                about the platform. We are sorry for the inconvenience.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mb={4}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Can anybody save information on the platform?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                Everyone can save information on the platform now. But after the
                31<sup>st</sup> of December 2022, only people with registered
                accounts will be able to save information on the platform.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default Help;
