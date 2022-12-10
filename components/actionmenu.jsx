import { ChevronRightIcon, Icon } from "@chakra-ui/icons";
import { Box, Container, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Actionmenu = () => {

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  return (
    <Container maxW={1200} p={0} mt={20}>
      <Flex
        p={0}
        mb={20}
        gap={isLargerThan700 ? 10 : 5}
        justifyContent={"center"}
      >
        <Link href="/nationalIdCollection">
          <Flex
            fontSize={isLargerThan700 ? "1rem" : "1rem"}
            alignItems={"center"}
            gap={5}
            textAlign={"center"}
            boxShadow={"lg"}
            borderRadius={"lg"}
            cursor="pointer"
            w={400}
            p={isLargerThan700 ? 10 : 3}
            bg={"brand.400"}
            color="brand.200"
            border={"1px"}
          >
            <Text>Have you found a lost ID card?</Text>

            <Icon
              color={"brand.300"}
              _hover={{
                animation: "horizontal_anim  0.7s infinite 0.4s ease-in-out",
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </Icon>
          </Flex>
        </Link>

        <Link href="/nationalId">
          <Flex
            fontSize={"1rem"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
            textAlign={"center"}
            boxShadow={"lg"}
            borderRadius={"lg"}
            cursor="pointer"
            w={400}
            p={isLargerThan700 ? 10 : 3}
            bg={"brand.100"}
            color="brand.400"
          >
            <Text>You lost your ID card?</Text>

            <Icon>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icon>
          </Flex>
        </Link>
      </Flex>
    </Container>
  );
};

export default Actionmenu;
