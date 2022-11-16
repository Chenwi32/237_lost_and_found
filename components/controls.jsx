import { Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Controls = ({ dataHandler, buttonText}) => {
  
  return (
    <Container mb={10}>

      <Flex gap={40}>
        <Link href="/">
        <button className={` btn2 flex`}>
          <span >&#8592;</span> <span>Back to home</span>
        </button>
      </Link>

      <button className={` btn `}
        onClick={dataHandler}>
        {buttonText}
      </button>
      </Flex>
      
    </Container>
  );
};

export default Controls;
