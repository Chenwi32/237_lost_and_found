import { Container, Heading, Text } from "@chakra-ui/react";
import BreadCrumbs from "../components/BreadCrumbs";

const Privacy = () => {
    return (
      <Container minH={"70vh"}>
        
            <Heading fontFamily="Andika" mb={5}>Privacy</Heading>
            <Text>We take your privacy very serious and so we try our very best not let your personal data enter the wrong hands</Text>
      </Container>
    );
}

export default Privacy;