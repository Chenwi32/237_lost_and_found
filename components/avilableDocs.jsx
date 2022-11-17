import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
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
      <Heading mb={10}>Found Documents</Heading>

      
        {foundIds.map((id) => {
          return (
            <Box>
              <Text mb={5}>
                ID Number: <br />
                <Text fontWeight={600} color={"brand.100"}>{id.idnum}</Text>
              </Text>
              <Text mb={5}>
                Holder's Name: <br />
                <Text fontWeight={600} color={"brand.100"}>{id.name}</Text>
              </Text>
              <Text mb={5}>
                It was found in: <br />
                <Text fontWeight={600} color={"brand.100"}>{id.location}</Text>
              </Text>

              <Button
                mb={5}
                bg={"brand.100"}
                color={"brand.400"}
                _hover="unset"
              >
                This is my ID card
              </Button>
            </Box>
          );
        })}
    
    </Container>
  );
};

export default AvilableDocs;
