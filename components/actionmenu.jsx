import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Actionmenu = () => {
  return (
    <Container maxW={1200}>
      <Flex mb={10} gap={10}>
        <Link href="/nationalIdCollection">
          <Box
            textAlign={"center"}
            boxShadow={"lg"}
            borderRadius={"lg"}
            cursor="pointer"
            w={400}
            p={10}
            color="brand.200"
          >
            <Heading
              color="brand.100"
              animation={"vertical_anim 0.7s infinite 0.4s ease-in-out"}
            >
              &#x2B07;
            </Heading>
            <Heading fontSize={"1.5rem"}>
              Have you found a lost ID card?
            </Heading>
          </Box>
        </Link>

        <Link href="/nationalId">
          <Box
            textAlign={"center"}
            boxShadow={"lg"}
            borderRadius={"lg"}
            cursor="pointer"
            w={400}
            p={10}
            color="brand.100"
          >
            <Heading
              color="brand.200"
              animation={"vertical_anim 0.7s infinite 0.4s ease-in-out"}
            >
              &#x2B07;
            </Heading>
            <Heading fontSize={"1.5rem"}>You lost your ID card?</Heading>
          </Box>
        </Link>
      </Flex>
    </Container>
  );
};

export default Actionmenu;
