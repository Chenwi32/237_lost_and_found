import {
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  textDecoration,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container p={"1rem 0"} maxW={"100%"} bg={"brand.500"} color={"brand.600"}>
     <Container maxW={1200}>
         <Flex
          alignItems={isLargerThan700 ? "flex-start" : "center"}
          justifyContent={isLargerThan700 ? "space-between" : "initial"}
          flexDirection={isLargerThan700 ? "row" : "column"}
          w="100%"
          mb={10}
          textAlign={isLargerThan700 ? "initial" : "center"}
        >
          <Flex flexDirection={"column"} mb={isLargerThan700 ? 0 : 5}>
            <Heading fontSize={"1.1rem"} mb={3}>
              Social
            </Heading>

            <Flex gap={5}>
              <a
                href="https://web.facebook.com/profile.php?id=100083184411993"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  fontSize={"1.5rem"}
                  transition="0.3s  ease-in-out"
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Icon>
              </a>
              <a
                href="https://twitter.com/237Lost_Found"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  fontSize={"1.5rem"}
                  transition="0.3s  ease-in-out"
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
                  transition="0.3s  ease-in-out"
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Icon>
              </a>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} mb={isLargerThan700 ? 0 : 5}>
            <Heading fontSize={"1.1rem"} mb={2}>
              How it works
            </Heading>
            <Flex flexDirection={"column"} fontSize="0.9rem">
              <Text
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Register Document
              </Text>
              <Text
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Search Document
              </Text>
              <Text
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Recover Document
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} mb={isLargerThan700 ? 0 : 5}>
            <Heading fontSize={"1.1rem"} mb={2}>
              Resources
            </Heading>
            <Flex flexDirection={"column"} fontSize="0.9rem">
              <Text
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                FAQ
              </Text>
              <Text
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Support
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} mb={isLargerThan700 ? 0 : 5}>
            <Heading fontSize={"1.1rem"} mb={2}>
              Company
            </Heading>
            <Flex flexDirection={"column"} fontSize="0.9rem">
              <Text
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Mission
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          justifyContent="center"
          mt={isLargerThan700 ? 0 : 10}
          fontSize="0.9rem"
          flexDirection={"column"}
        >
          <Text mb={2}>
            &#x00A9; 237 Lost and Found 2023 | All right reserved
          </Text>

           <Flex flexWrap="wrap" gap={3}>
            <Text
              color={"brand.100"}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <Link fontWeight={100} href={"/privacy"}>
                Privacy Policy
              </Link>
            </Text>
            <Text>|</Text>
            <Text
              color={"brand.100"}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <Link href={"/privacy"}>Terms and Conditions</Link>
            </Text>
            <Text>|</Text>
            <Text
              color={"brand.100"}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <Link href={"/privacy"}>Cookie Policy</Link>
            </Text>
          </Flex> 
        </Flex> 
      </Container>
    </Container>
  );
};

export default Footer;
