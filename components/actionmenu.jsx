import { Box, Container, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

const Actionmenu = () => {

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  return (
    <Container maxW={1200} p={0}>
      <Flex p={0} mb={10}  gap={isLargerThan700 ? 10 : 5}>
        <Link href="/nationalIdCollection">
          <Box
            textAlign={"center"}
            boxShadow={"lg"}
            borderRadius={"lg"}
            cursor="pointer"
            w={400}
            p={isLargerThan700? 10: isLargerThan400? 3 : 1}
            color="brand.200"
          >
            <Heading
              color="brand.100"
              animation={"vertical_anim 0.7s infinite 0.4s ease-in-out"}
            >
              &#x2B07;
            </Heading>
            <Heading fontSize={isLargerThan700 ? "1.5rem" : "1rem"}>
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
            p={isLargerThan700 ? 10 : 3}
            color="brand.100"
          >
            <Heading
              color="brand.200"
              animation={"vertical_anim 0.7s infinite 0.4s ease-in-out"}
            >
              &#x2B07;
            </Heading>
            <Heading fontSize={isLargerThan700 ? "1.5rem" : "1rem"}>
              You lost your ID card?
            </Heading>
          </Box>
        </Link>
      </Flex>
    </Container>
  );
};

export default Actionmenu;
