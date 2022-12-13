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
import styles from "./styles/success.module.css";

const Success = ({ results }) => {
  return (
    <Container maxW={900}>
      <Heading>Great news!!! We found your document!!!</Heading>

      {results.map((result) => {
        return (
          <VStack align={"left"}>
            <Heading mt={5} mb={5} fontSize={"1.5rem"}>
              Here is your document identification detail:
            </Heading>

            <Image src={result.idimage} />

            <HStack>
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
              <p>It is available for collection at {result.location}.</p>
            </HStack>

            <HStack>
              <Text>You can contact the person who found your ID here:</Text>

              <Text color={"brand.100"} fontWeight={600}>
                {result.phoneNumber}
              </Text>
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
