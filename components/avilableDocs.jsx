import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,

  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const AvilableDocs = () => {
  const [message, setmessage] = useState(
    "ID cards that we have with us will be displayed here."
  );

  const toast = useToast()

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const idcollection = collection(db, "idcards");

  const [foundIds, setfoundIds] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState("");

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

  const sendNotification = async (e, { data }) => {
    e.preventDefault();

    console.log(data);

    const response = await axios.post("/api/sendgrid", data);

    console.log(response);
    if (response.status === 200) {
      toast({
        position: "top",
        title: "Success",
        description:
          "Notification has been sent successfully!! You will be contacted within 48 hours",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container p={0} maxW={1200} mt={10} mb={10}>
      <Heading fontSize={"1.5rem"} mt={10} mb={5}>
        Found Documents
      </Heading>

      <SimpleGrid columns={isLargerThan700 ? 2 : 1} gap={5} columnGap={5}>
        {loading ? (
          <>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>

            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>

            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </>
        ) : (
          foundIds.map((id) => {
            return (
              <>
                <Flex
                  key={id.idnum}
                  p={5}
                  boxShadow={"lg"}
                  border={"1px solid"}
                  borderRadius="lg"
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Box position={"relative"} w="100%">
                    <Image
                      src={id.idimage}
                      w={"100%"}
                      h={250}
                      mb={5}
                      backdropBlur="0px"
                    />
                    <Box
                      h={"100%"}
                      backdropFilter="auto"
                      position="absolute"
                      backdropBlur={"5px"}
                      top={0}
                      right={0}
                      width="100%"
                    ></Box>
                  </Box>

                  <VStack
                    alignItems="flex-start"
                    justifyContent={"flex-start"}
                    w="100%"
                  >
                    <HStack>
                      <Text>ID Number:</Text>
                      <Text fontWeight={600} color={"brand.400"}>
                        {id.idnum}
                      </Text>
                    </HStack>

                    <HStack mb={5}>
                      <Text>Holder's Name:</Text>

                      <Text fontWeight={600} color={"brand.400"}>
                        {id.name}
                      </Text>
                    </HStack>
                    <HStack mb={5}>
                      <Text>It was found in:</Text>

                      <Text fontWeight={600} color={"brand.400"}>
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
                      onClick={onOpen}
                    >
                      This is my ID card
                    </Button>
                  </VStack>
                </Flex>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton
                      color={"brand.400"}
                      _hover={{
                        bg: "brand.200",
                      }}
                    />
                    <ModalBody p={5}>
                      <Text mb={5} mt={5}>
                        Please Type your phone number here so that we can
                        contact you
                      </Text>
                      <Input
                        value={phoneNumber}
                        type={"number"}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </ModalBody>

                    <ModalFooter
                      display={"flex"}
                      justifyContent="space-between"
                    >
                      <Button
                        color={"brand.400"}
                        bg={"brand.200"}
                        _hover={{
                          bg: "brand.100",
                        }}
                        mr={3}
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={(e) => {
                          const data = {
                            phoneNumber,
                            id,
                          };
                          onClose();
                          sendNotification(e, { data });
                        }}
                        _hover={{
                          bg: "brand.200",
                        }}
                        bg={"brand.100"}
                        color={"brand.400"}
                      >
                        Proceed
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            );
          })
        )}
      </SimpleGrid>
    </Container>
  );
};

export default AvilableDocs;
