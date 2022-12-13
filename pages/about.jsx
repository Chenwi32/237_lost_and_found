import { Container } from "@chakra-ui/react";
import BreadCrumbs from "../components/BreadCrumbs";

import Description from "../components/description";

const About = () => {
    return (
        <Container mb={10} maxW={1200}>
            <BreadCrumbs/>
            <Description/>
        </Container>
    );
}

export default About;