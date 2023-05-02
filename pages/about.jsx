import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

import Description from "../components/description";

const About = () => {
  return (
    <Container mt={20} mb={10} maxW={900}>
      <Heading mb={5} fontFamily={"Andika"} color={"brand.400"}>
        About 237 lost and found
      </Heading>

      <Text>
        {" "}
        237 lost and found is a platform that was created in 2022 to help people
        who lost their documents to recover them by connecting them to people
        who found them.
      </Text>

      <Description />

      <Box>
        <Heading
        color={"brand.400"}
        fontSize={"1.5rem"}
        mt={10}
        mb={5}
        fontFamily="Andika"
      >
        How to register a found document
      </Heading>

      <Text>
        To register a found document, you have to navigate to the found document page by clicking on one of the buttons indicated below.
        </Text>
        
        <Image src="/images/pic-17.png" w={300} m={'auto'} mt={10} mb={10} alt=""/>

        <Text>If you are not logged in, you will not be able to access this page and you will be redirected to the Log in page, then from there you can log in</Text>
<Image src="/images/pic-15.png" w={300} m={'auto'} mt={10} mb={10} alt="" />
        
      </Box>
      
    </Container>
  );
};

export default About;
