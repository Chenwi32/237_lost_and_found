import { Container } from "@chakra-ui/react";

import Description from "../components/description";

const About = () => {
    return (
        <Container mb={10} maxW={1200}>
            <Description/>
        </Container>
    );
}

export default About;