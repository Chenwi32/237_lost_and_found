import { Button, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

const Controls = ({ dataHandler, buttonText }) => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  return (
    <Container p={0} mb={10}>
      <Flex gap={isLargerThan700 ? 40 : isLargerThan400 ? 5 : 3}>
        <Link href="/">
          <Button color={'brand.200'} border={'1px '} bg='unset' >
            <span>&#8592;</span> <span>Back to home</span>
          </Button>
        </Link>

        <Button
          bg="brand.100"
          color="brand.400"
          _hover={{
            color: "brand.400",
            bg: "brand.200",
          }}
          p={5}
          onClick={dataHandler}
        >
          {buttonText}
        </Button>
      </Flex>
    </Container>
  );
};

export default Controls;
