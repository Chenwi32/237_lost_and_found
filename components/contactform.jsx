import { Box, Button, Container, Flex, HStack, Input, Text, Textarea, useMediaQuery } from "@chakra-ui/react";

const Contactform = () => {

     const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

    return (
      <Container>
        <Flex
          fontSize={isLargerThan700 ? "initial" : "0.8rem"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <HStack mb={5}>
            <Text textAlign={"left"} w={isLargerThan700 ? 130 : "fit-content"}>
              Email:
            </Text>
            <Input
              _focusVisible={{
                border: "none",
                borderBottom: "2px solid #00ebc8",
              }}
              borderRadius={"0"}
              border={"none"}
              borderBottom={"1px solid #B9BCBF"}
              height={"unset"}
              placeholder="example@gmail.com"
            />
          </HStack>

          <HStack mb={5}>
            <Text textAlign={"left"} w={isLargerThan700 ? 130 : "fit-content"}>
              Name:
            </Text>
            <Input
              _focusVisible={{
                border: "none",
                borderBottom: "2px solid #00ebc8",
              }}
              borderRadius={"0"}
              border={"none"}
              borderBottom={"1px solid #B9BCBF"}
              placeholder="John Doe"
              height={"unset"}
            />
          </HStack>

          <HStack mt={5} mb={5}>
            <Text textAlign={"left"} w={isLargerThan700 ? 130 : "fit-content"}>
              Message:
            </Text>
            <Textarea
              borderColor={"#B9BCBF"}
              border={"1px"}
              _focusVisible={{
                border: "2px solid #00ebc8",
              }}
            />
          </HStack>

          <Box w={isLargerThan700 ? "inherit" : "100%"}>
            <Button
              w={isLargerThan700 ? "inherit" : "100%"}
              mb={5}
              bg={"brand.100"}
              color={"brand.400"}
              _hover={{
                bg: "brand.200",
                color: "brand.400",
              }}
            >
              Send
            </Button>
          </Box>
        </Flex>
      </Container>
    );
}

export default Contactform;