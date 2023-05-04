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
            <a href="#mission">Mission</a>{" "}
          </ListItem>
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

        <Flex
          flexDirection={isLargerThan700 ? "row" : "column"}
          alignItems={"center"}
          gap={2}
        >
          <Image
            src="/images/pic-12.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
          <Text fontSize={"2rem"}>
            <FontAwesomeIcon
              icon={isLargerThan700 ? faArrowRight : faArrowDown}
            />
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

        <Text>
          To claim a document, you can go to the feeds section and srcoll
          through the available documents or you go to the lost ID card page and
          type your ID name or number to search with the search engine, more on
          this below.
        </Text>

        <Heading
          fontSize={"1.2rem"}
          fontFamily={"Andika"}
          color={"brand.500"}
          mt={10}
          mb={5}
        >
          Using the feeds page to look for your ducument.
        </Heading>

        <Text>
          To access the page, you just have to navigate to it by clicking the
          menu icon on mobile device, or just click feeds in the menu on top if
          you are on your computer.
        </Text>
        <Flex
          flexDirection={isLargerThan700 ? "row" : "column"}
          alignItems={"center"}
          gap={2}
        >
          <Image
            src="/images/pic-1.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
          <Text fontSize={"2rem"}>
            <FontAwesomeIcon
              icon={isLargerThan700 ? faArrowRight : faArrowDown}
            />
          </Text>

          <Image
            src="/images/pic-10.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
        </Flex>

        <Text>
          When you find your Document, you click on the "This is my ID card
          button", when you do, a dialogue box will pop up asking for your phone
          number, enter a number that you be easily reached through, and click
          "Proceed"
        </Text>

        <Flex
          flexDirection={isLargerThan700 ? "row" : "column"}
          alignItems={"center"}
          gap={2}
        >
          <Image
            src="/images/pic-8.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
          <Text fontSize={"2rem"}>
            <FontAwesomeIcon
              icon={isLargerThan700 ? faArrowRight : faArrowDown}
            />
          </Text>

          <Image
            src="/images/pic-6.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
        </Flex>

        <Text>
          If everything goes well, you will recieve a success notification that
          looks like this below, otherwise, please{" "}
          <Link href="/contact" color={"brand.100"}>
            get in touch
          </Link>{" "}
          and let us know.
        </Text>

        <Image
          src="/images/pic-5.png"
          h={300}
          m={"auto"}
          mt={10}
          mb={10}
          alt=""
        />

        <Text>
          After that, all you have to do is to wait for maximum 48 hours, if you
          are not contacted, please still get back to us.
        </Text>

        <Heading
          fontSize={"1.2rem"}
          fontFamily={"Andika"}
          color={"brand.500"}
          mt={10}
          mb={5}
        >
          Using the search engine.
        </Heading>

        <Text>
          To use the search engine, you can click on the "lost ID card " button
          as indicated below.
        </Text>

        <Image
          src="/images/pic-16.png"
          h={300}
          m={"auto"}
          mt={10}
          mb={10}
          alt=""
        />

        <Text>
          From there , You can switch between the pannels to use either your
          name or ID card number.
        </Text>

        <Flex
          flexDirection={isLargerThan700 ? "row" : "column"}
          alignItems={"center"}
          gap={2}
        >
          <Image
            src="/images/pic-4.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
          <Text fontSize={"2rem"}>
            OR
          </Text>

          <Image
            src="/images/pic-2.png"
            h={300}
            m={"auto"}
            mt={10}
            mb={10}
            alt=""
          />
        </Flex>

        <Text>
          After typing the number or the name, you click on search, and just wait for the results to be displayed below the search bar. You can then claim your document from there the same way I explained above in the feeds page method.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
