import { Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <Container p={"1rem 0"} maxW={"100%"} bg={"brand.500"} color={"brand.600"}>
      <HStack maxW={1200} m={"auto"} justifyContent={"space-between"} w="100%">
        {
          <Flex alignItems={"center"} justifyContent="center">
            <Text align={"center"}>
              &#x00A9; 237 Lost and Found 2022 | All Rights Reserved.
            </Text>
          </Flex>
        }

        <HStack gap={5}>
          <a
            href="https://web.facebook.com/profile.php?id=100083184411993"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              fontSize={"1.5rem"}
              transition="0.5s  ease-in-out"
              _hover={{
                transform: "translateY(-0.3rem)",
              }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Icon>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <Icon
              fontSize={"1.5rem"}
              transition="0.5s  ease-in-out"
              _hover={{
                transform: "translateY(-0.3rem)",
              }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Icon>
          </a>

          <a href="" target="_blank" rel="noreferrer">
            <Icon
              fontSize={"1.5rem"}
              transition="0.5s  ease-in-out"
              _hover={{
                transform: "translateY(-0.3rem)",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Icon>
          </a>
        </HStack>
      </HStack>
    </Container>
  );
};

export default Footer;
