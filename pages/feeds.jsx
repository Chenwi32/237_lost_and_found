import { Container } from "@chakra-ui/react";
import AvilableDocs from "../components/avilableDocs";
import BreadCrumbs from "../components/BreadCrumbs";

const Feeds = () => {
    return (
        <Container maxW={1200} minHeight={'90vh'}>

            <BreadCrumbs/>

            <AvilableDocs/>
        </Container>
    );
}

export default Feeds;