import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";

import Description from "../components/description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container mt={20} mb={10} maxW={900}>
      <Heading
        mb={5}
        fontSize={"1.5rem"}
        fontFamily={"Andika"}
        color={"brand.400"}
      >
        About 237 lost and found
      </Heading>

      <Text>
        237 lost and found is a platform that was created in 2022 to help people
        who lost their documents to recover them by connecting them to people
        who found them.
      </Text>

      <Box>
        <Heading
          fontSize={"1.2rem"}
          fontFamily={"Andika"}
          color={"brand.500"}
          mt={10}
        >
          Table of content
        </Heading>

        <UnorderedList mt={5} color={"brand.100"}>
          <ListItem>
            <a href="#howitworks">How it works</a>{" "}
          </ListItem>
          <ListItem>
            <a href="#disclaimer">Disclaimer</a>{" "}
          </ListItem>
          <ListItem>
            <a href="#register">Register a found document</a>{" "}
          </ListItem>
          <ListItem>
            <a href="#claim">Claim a found document</a>
          </ListItem>
        </UnorderedList>
      </Box>

      <Description />

      <Box>
        <Heading
          color={"brand.400"}
          fontSize={"1.5rem"}
          mt={10}
          mb={5}
          fontFamily="Andika"
          id="register"
        >
          How to register a found document
        </Heading>

        <Text>
          To register a found document, you have to navigate to the found
          document page by clicking on one of the buttons indicated below.
        </Text>

        <Image
          src="/images/pic-17.png"
          h={300}
          m={"auto"}
          mt={10}
          mb={10}
          alt=""
        />

        <Text>
          If you are not logged in, you will not be able to access this page and
          you will be redirected to the Log in page, then from there you can log
          in with your google acount as indicated below.
        </Text>
        <Image
          src="/images/pic-15.png"
          h={300}
          m={"auto"}
          mt={10}
          mb={10}
          alt=""
        />

        <Text>
          After clicking on the Google button, a window will open and you can
          select your google account. The page will look like this;
        </Text>
        <Image
          src="/images/pic-14.png"
          h={300}
          m={"auto"}
          mt={10}
          mb={10}
          alt=""
        />
        <Text>
          After logging in, You will then be redirected to the page where you
          can be able to register the document. You can then fill out the
          infomation and required, and then choose a picture of the document
          from your device. This is what it will look like;
        </Text>
        <Image
          src="/images/pic-13.png"
          h={300}
          m={"auto"}
          mt={10}
          mb={10}
          alt=""
        />

        <Text>
          After choosing the image, you should then click the upload button and
          then click on send respectively as indicated below.
        </Text>

        <Flex flexDirection={isLargerThan700 ? 'row' : "column"} alignItems={"center"} gap={2}>
          <Image
            src="/images/pic-12.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
          <Text fontSize={"2rem"}>
            <FontAwesomeIcon icon={ isLargerThan700 ? faArrowRight : faArrowDown} />
          </Text>

          <Image
            src="/images/pic-11.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
        </Flex>
        <Text>
          After clicking send, a confirmation window will pop, just check if
          everything is okay and send and that is it. if everything goes well,
          then you have successfully registered a found document and you will
          see a success alert, otherwise, please{" "}
          <Link href="/contact" color={"brand.100"}>
            get in touch
          </Link>{" "}
          and let us know.
        </Text>
      </Box>

      <Box>
        <Heading
          color={"brand.400"}
          fontSize={"1.5rem"}
          mt={10}
          mb={5}
          fontFamily="Andika"
          id="claim"
        >
          How to claim a found document.
        </Heading>
      </Box>
    </Container>
  );
};

export default About;
