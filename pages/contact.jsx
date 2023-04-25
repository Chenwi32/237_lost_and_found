import { EmailIcon, Icon, PhoneIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import styles from "../styles/contact.module.css";

import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import BreadCrumbs from "../components/BreadCrumbs";

const Contact = () => {
  return (
    <>
      {
        <Head>
          <title>237L&F ID contact page</title>
          <meta name="description" content="237 Lost and Foud contact page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container mt={20} maxW={1000} minH={"80vh"} align="center">
        <Flex>
          <Image src="/images/lost.jpg" w={500} h={400} alt="lost documents" />

          <Flex
            w={"100%"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            bg={"#F3F9FE"}
            p={5}
            pr={10}
          >
            <Heading
              fontSize={"1.5rem"}
              textAlign={"left"}
              mb={5}
              fontFamily="Andika"
            >
              Get in touch with us.
            </Heading>

            <Flex flexDirection={"column"}>
              <HStack mb={5}>
                <Text textAlign={"left"} w={130}>
                  Email:
                </Text>
                <Input
                  _focusVisible={{
                    border: "none",
                    borderBottom: "2px solid #00ebc8",
                  }}
                  borderRadius={"0"}
                  border={"none"}
                  borderBottom={"1px solid #B9BCBF"}
                  height={"unset"}
                />
              </HStack>

              <HStack mb={5}>
                <Text textAlign={"left"} w={130}>
                  Name:
                </Text>
                <Input
                  _focusVisible={{
                    border: "none",
                    borderBottom: "2px solid #00ebc8",
                  }}
                  borderRadius={"0"}
                  border={"none"}
                  borderBottom={"1px solid #B9BCBF"}
                  height={"unset"}
                />
              </HStack>

              <HStack mt={5}>
                <Text textAlign={"left"} w={130}>
                  Message:
                </Text>
                <Textarea
                  borderColor={"#B9BCBF"}
                  border={"1px"}
                  _focusVisible={{
                    border: "2px solid #00ebc8",
                  }}
                />
              </HStack>
            </Flex>

            <Flex fontSize={"2.4rem"} gap={2} justifyContent={'flex-end'}>
              <a href="https://wa.me/+237651395832" target="blank">
                <Icon
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                  transition="0.3s  ease-in-out"
                  p={2}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Icon>
              </a>
              <a
                href="https://web.facebook.com/237-Lost-Found-102525172535103"
                target="blank"
              >
                <Icon
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                  transition="0.3s  ease-in-out"
                  p={2}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Icon>
              </a>

              <a href="mailto:chenwieugene.j@gmail.com" _target="_blank">
                <Icon
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                  transition="0.3s  ease-in-out"
                  p={2}
                >
                  <EmailIcon />
                </Icon>
              </a>

              <a href="tel:+237651395832">
                <Icon
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                  transition="0.3s  ease-in-out"
                  p={2}
                >
                  <PhoneIcon />
                </Icon>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Contact;
