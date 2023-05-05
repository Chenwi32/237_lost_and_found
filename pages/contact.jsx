import { EmailIcon, Icon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";

import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Contactform from "../components/contactform";

const Contact = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <>
      {
        <Head>
          <title>237L&F ID contact page</title>
          <meta name="description" content="237 Lost and Foud contact page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container
        p={isLargerThan700 ? "initial" : "0"}
        mt={20}
        maxW={1000}
        minH={"80vh"}
        align="center"
      >
        <Flex flexDirection={isLargerThan700 ? "row" : "column"}>
          <Image
            src="/images/lost.jpg"
            w={500}
            alt="woman who lost something"
          />

          <Flex
            w={"100%"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            bg={"#F3F9FE"}
            p={isLargerThan700 ? 5 : 3}
            pr={isLargerThan700 ? 10 : 3}
          >
            <Heading
              fontSize={"1.5rem"}
              textAlign={"left"}
              mb={5}
              fontFamily="Andika"
            >
              Get in touch with us.
            </Heading>

            <Contactform />

            <Flex
              fontSize={isLargerThan700 ? "2.4rem" : "2rem"}
              gap={2}
              justifyContent={"flex-end"}
            >
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
