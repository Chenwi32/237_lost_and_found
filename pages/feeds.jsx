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

const Feeds = (props) => {
  const { results } = props;

  /* const [message, setmessage] = useState(
    "ID cards that we have with us will be displayed here."
  ); */

  const toast = useToast();

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const [foundIds, setfoundIds] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState("");

  const [currentId, setCurrentId] = useState();

  // Get the id cards when message changes onclick
  // of the button below

  const handleUI = async () => {
    if (results.length <= 0) {
      setfoundIds(["Sorry there are no found documents"]);
    } else if (results.length != 0) {
      setfoundIds(results);
    } else {
      setfoundIds(["Sorry there are no found documents"]);
    }
  };
  useEffect(() => {
    // assign the new array to the foundIds
    handleUI();
  }, []);

  const loading = foundIds.length === 0;
  const empty = foundIds.includes("Sorry there are no found documents");

  const sendNotification = async (e, data) => {
    e.preventDefault();

    const response = await axios.post("/api/sendgrid", data);

    if (response.status === 200) {
      toast({
        position: "top",
        title: "Success",
        description:
          "Notific ation has been sent successfully!! You will be contacted within 48 hours, Hang in there!!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      setPhoneNumber("");
    } else if (response.status === 500) {
      toast({
        position: "top",
        title: "Error",
        description: "Sorry Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW={1200} mt={20} mb={10}>
      <Heading fontSize={"1.5rem"} mt={10} mb={5} fontFamily="Andika">
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
        ) : empty ? (
          foundIds.map((message) => {
            return (
              <Box key={message}>
                <Heading>{message}</Heading>
              </Box>
            );
          })
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
                      alt="ID card image"
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
                    <Flex flexDirection={"column"}>
                      <Text fontSize={"0.9rem"} color={"brand.300"}>
                        ID Number:
                      </Text>
                      <Text fontWeight={600} color={"brand.400"}>
                        {id.idnum}
                      </Text>
                    </Flex>

                    <Flex flexDirection={"column"} mb={5}>
                      <Text fontSize={"0.9rem"} color={"brand.300"}>
                        Holder's Name:
                      </Text>

                      <Text fontWeight={600} color={"brand.400"}>
                        {id.name}
                      </Text>
                    </Flex>
                    <Flex flexDirection={"column"} mb={5}>
                      <Text fontSize={"0.9rem"} color={"brand.300"}>
                        It was found in:
                      </Text>

                      <Text fontWeight={600} color={"brand.400"}>
                        {id.location}
                      </Text>
                    </Flex>

                    <Button
                      mb={5}
                      bg={"brand.100"}
                      color={"brand.400"}
                      _hover={{
                        bg: "brand.200",
                        color: "brand.400",
                      }}
                      boxShadow={"lg"}
                      onClick={() => {
                        setCurrentId(id);
                        onOpen();
                      }}
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
                        Please type your phone number here so that we can
                        contact you:
                      </Text>
                      <Input
                        value={phoneNumber}
                        type={"tel"}
                        placeholder="+237674******"
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
                            id: currentId,
                          };

                          console.log(data);

                          if (phoneNumber === "" || phoneNumber === null) {
                            toast({
                              position: "top",
                              title: "Warning",
                              description:
                                "Please, it looks like you have forgotten to type in your phone number. Please fill in your number",
                              status: "error",
                              duration: 9000,
                              isClosable: true,
                            });
                          } else {
                            onClose();
                            console.log(data);
                            sendNotification(e, data);
                          }
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

export const getStaticProps = async () => {
  const idcollection = collection(db, "idcards");
  // Query all Id cards
  const idQuery = query(idcollection);

  // get id cards
  const querySnapshot = await getDocs(idQuery);

  // Map through the ids and add them to a new array
  const results = [];

  querySnapshot.forEach((snapshot) => {
    results.push(snapshot.data());
  });

  return {
    props: {
      results: JSON.parse(JSON.stringify(results)),
    },
  };
};

export default Feeds;
