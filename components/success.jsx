import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const Success = ({ results }) => {
  return (
    <Container maxW={900}>
      <Heading color={"brand.400"} mb={10}>
        Great news!!! We found documents that match your name, please carefully
        look through to identify yours!!!
      </Heading>

      {results.map((result) => {
        return (
          <VStack
            color={"brand.500"}
            textAlign={"left"}
            key={result.idnum}
            alignItems={"flex-start"}
            mb={50}
p={5}
            border="1px"
          >
            <Heading fontSize={"1.5rem"} mb={2}>
              {result.name}
            </Heading>

            <Image src={result.idimage} />

            <HStack mt={10}>
              <Text> ID number:</Text>
              <Text color={"brand.100"} fontWeight={600}>
                {result.idnum}
              </Text>
            </HStack>

            <HStack>
              <Text> Holder's name:</Text>

              <Text color={"brand.100"} fontWeight={600}>
                {result.name}
              </Text>
            </HStack>

            <HStack>
              <p>It is available for collection in {result.location}.</p>
            </HStack>

            <Text>
              Please let us know when you collect it and please don't forget to
              share the news about our plartform to help other people too.
            </Text>
            <Text>
              If you have any issues, please do not hesitate to{" "}
              <Link href="/contact">
                <a>contact</a>
              </Link>{" "}
              us.
            </Text>
            <Text>
              Thank you for trusting us. We are so grateful we could help you.
            </Text>
          </VStack>
        );
      })}
    </Container>
  );
};

export default Success;
