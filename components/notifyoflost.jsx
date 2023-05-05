import { Container, Heading } from "@chakra-ui/react";
import Contactform from "./contactform";

const Notifyoflost = () => {
  return (
    <Container mt={10} mb={10} maxW={"unset"}>
      <Heading
        fontSize={"1rem"}
        color={"brand.500"}
        fontFamily={"Andika"}
        mb={5}
      >
        Notify us about a lost document.
      </Heading>
      <Contactform />
    </Container>
  );
};

export default Notifyoflost;
