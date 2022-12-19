import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const AvilableDocs = () => {
  const [message, setmessage] = useState(
    "ID cards that we have with us will be displayed here."
  );

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

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

  const loading = foundIds.length === 0;

  return (
    <Container p={0} maxW={1200} mt={10}>
      <Heading fontSize={"1.5rem"} mt={10} mb={5}>
        Found Documents
      </Heading>

      <SimpleGrid columns={isLargerThan700 ? 2 : 1} gap={5} columnGap={5}>
        {loading ? (

          <>
            
          
           <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
            </Box>
            
           <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
            </Box>
            
           <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
          </>
         
        ) : (
          foundIds.map((id) => {
            return (
              <Flex
                key={id.idnum}
                p={5}
                boxShadow={"lg"}
                border={"1px solid"}
                borderRadius="lg"
                flexDirection={'column'}
                alignItems={'center'}
                color={'brand.400'}
              >
                <Image src={id.idimage}
                  w={"100%"}
                  h={250}
                  mb={5}
                />

                <VStack alignItems='flex-start' justifyContent={'flex-start'} w="100%">
                  <HStack >
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
                  _hover={{
                    bg: "brand.200",
                    color: "brand.400",
                  }}
                  boxShadow={"lg"}
                >
                  This is my ID card
                </Button>
                </VStack>
                
              </Flex>
            );
          })
        )}
      </SimpleGrid>
    </Container>
  );
};

export default AvilableDocs;
