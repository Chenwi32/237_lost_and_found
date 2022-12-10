import { Box, Button, Container, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const AvilableDocs = () => {
  const [message, setmessage] = useState(
    "ID cards that we have with us will be displayed here."
  );

  const idcollection = collection(db, "idcards");

  const [foundIds, setfoundIds] = useState([]);

  const getIds = async () => {
    // Query all Id cards
    const idQuery = query(idcollection);

    // get id cards
    const querySnapshot = await getDocs(idQuery);

    // Map through the ids and add them to a new array
    const results = [];

    querySnapshot.forEach((snapshot) => {
      results.push(snapshot.data());
    });

    // assign the new array to the foundIds
    setfoundIds(results);
  };

  // Get the id cards when message changes onclick
  // of the button below

  useEffect(() => {
    getIds();
  }, [message]);

  return (
    <Container p={0} maxW={1200} mt={10}>
      <Heading fontSize={"1.5rem"} mt={10} mb={5}>
        Found Documents
      </Heading>

      <SimpleGrid columns={2} gap={5} columnGap={5}>
{foundIds.map((id) => {
        return (
          <Box
            key={id.idnum}
            p={"1.5rem"}
            boxShadow={"lg"}
            border={"1px solid"}
            borderRadius="lg"
          >
            <HStack mb={5}>
              <Text>ID Number:</Text>
              <Text fontWeight={600} color={"brand.100"}>
                {id.idnum}
              </Text>
            </HStack>

            <HStack mb={5}>
              <Text>Holder's Name:</Text>

              <Text fontWeight={600} color={"brand.100"}>
                {id.name}
              </Text>
            </HStack>
            <HStack mb={5}>
              <Text>It was found in:</Text>

              <Text fontWeight={600} color={"brand.100"}>
                {id.location}
              </Text>
            </HStack>

            <Button
              mb={5}
              bg={"brand.100"}
              color={"brand.400"}
              _hover={{ bg: "brand.500" }}
              boxShadow={"lg"}
            >
              This is my ID card
            </Button>
          </Box>
        );
      })}
      </SimpleGrid>

      
    </Container>
  );
};

export default AvilableDocs;
