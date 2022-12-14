import { Container, Flex, Text } from "@chakra-ui/react";
import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <Container p={"1rem 0"} maxW={"100%"} bg={'brand.200'} color={'brand.500'}>
      <Container maxW={1200} m={"auto"}>
        <Flex alignItems={'center'} justifyContent="center">
          <Text align={'center'}>&#x00A9; 237 Lost and Found 2022 | All Rights Reserved.</Text>
        </Flex>
      </Container>
    </Container>
  );
};

export default Footer;
