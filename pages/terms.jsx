import { Container, Heading, Text } from "@chakra-ui/react";
import BreadCrumbs from "../components/BreadCrumbs";

const Term = () => {
    return (
        <Container minH={'70vh'}>
            <BreadCrumbs/>
            <Heading fontFamily={'Andika'} mb={5}>
                Terms and Condition of use
            </Heading>

            <Text> By continuing to use our services, you automatically agree to the terms and condition listed here</Text>
        </Container>
    );
}

export default Term;