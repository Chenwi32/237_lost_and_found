import { Container, Flex, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

const Controls = ({ dataHandler, buttonText }) => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  return (
    <Container p={0} mb={10}>
      <Flex gap={isLargerThan700 ? 40 : isLargerThan400? 5 : 3}>
        <Link href="/">
          <button className={` btn2 flex`}>
            <span>&#8592;</span> <span>Back to home</span>
          </button>
        </Link>

        <button className={` btn `} onClick={dataHandler}>
          {buttonText}
        </button>
      </Flex>
    </Container>
  );
};

export default Controls;
