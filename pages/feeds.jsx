import { Container } from "@chakra-ui/react";
import AvilableDocs from "../components/avilableDocs";
import BreadCrumbs from "../components/BreadCrumbs";

const Feeds = () => {
  return (
    <Container mt={20} maxW={1200} minHeight={"90vh"}>
      

      <AvilableDocs />
    </Container>
  );
};

export default Feeds;
