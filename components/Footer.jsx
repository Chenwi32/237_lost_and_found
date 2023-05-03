import {
  Button,
  Container,
  Flex,
  Heading,
  
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  Text,

  useDisclosure,
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

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container p={"1rem 0"} maxW={"100%"} bg={"brand.500"} color={"brand.600"}>
      <Container maxW={1200} fontFamily="Andika">
        <SimpleGrid
          justifyContent={isLargerThan700 ? "space-between" : "initial"}
          columns={isLargerThan700 ? 5 : 2}
          w="100%"
          mb={10}
        >
          <Flex flexDirection={"column"} mb={isLargerThan700 ? 0 : 5}>
            <Heading fontSize={"1.1rem"} mb={3} fontFamily="Andika">
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
            <Heading fontSize={"1.1rem"} mb={2} fontFamily="Andika">
              How it works
            </Heading>
            <Flex flexDirection={"column"} fontSize="0.9rem" gap={2}>
              <Link
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                href="/about/#register"
              >
                Register Document
              </Link>
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
            <Heading fontSize={"1.1rem"} mb={2} fontFamily="Andika">
              Resources
            </Heading>
            <Flex flexDirection={"column"} fontSize="0.9rem" gap={2}>
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
            <Heading fontSize={"1.1rem"} mb={2} fontFamily="Andika">
              Company
            </Heading>
            <Flex flexDirection={"column"} fontSize="0.9rem" gap={2}>
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
        </SimpleGrid>

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
              <Link href={"/terms"}>Terms and Conditions</Link>
            </Text>
            <Text>|</Text>
            <Text color={"brand.100"} cursor="pointer" onClick={onOpen}>
              Cookie Policy
            </Text>
          </Flex>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton
              color={"brand.400"}
              _hover={{
                bg: "brand.200",
              }}
            />
            <ModalBody>
              <Heading fontFamily={"Andika"} fontSize="1rem">
                This website uses cookies
              </Heading>
              <Text>
                We use cookies to personalise content to provide and to analyse
                our traffic.
              </Text>
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent="space-between">
              <Button
                color={"brand.400"}
                bg={"brand.200"}
                _hover={{
                  bg: "brand.100",
                }}
                mr={3}
                onClick={onClose}
              >
                Deny
              </Button>
              <Button
                onClick={() => {
                  onClose();
                }}
                _hover={{
                  bg: "brand.200",
                }}
                bg={"brand.100"}
                color={"brand.400"}
              >
                Accept
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Container>
  );
};

export default Footer;
