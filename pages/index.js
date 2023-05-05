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
  SkeletonText,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Actionmenu from "../components/actionmenu";
import Announcement from "../components/Announcement";

import Cta from "../components/cta";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Notifyoflost from "../components/notifyoflost";

const HomePage = (props) => {
  const { results } = props;

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [currentId, setCurrentId] = useState();

  const [foundIds, setfoundIds] = useState([]);

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
  return (
    <>
      {
        <Head>
          <title>237L&F home page</title>
          <meta name="description" content="237 Lost and Found home page" />
          <meta
            name="google-site-verification"
            content="xs39n7Ir_oqjJtD6C39rsAdCqz9DUEPpFVdb8cJjufE"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container mt={20} maxW={1200}>
        <Heading textAlign={"center"} fontFamily="Andika">
          Welcome to 237 Lost and Found
        </Heading>
        <Heading
          textAlign={"center"}
          fontSize={"1.2rem"}
          mt={5}
          mb={10}
          fontFamily="Andika"
        >
          We are here to help you find your lost document.
        </Heading>

        <Announcement
          message={`This platform is still under construction, so you should expect some undesired behaviours, but we promise you the best in the days ahead`}
          type={"warning"}
        />

        <Actionmenu />

        <Heading
          color={"brand.400"}
          fontSize={"1.5rem"}
          mt={10}
          mb={5}
          fontFamily="Andika"
        >
          Found Documents
        </Heading>

        <SimpleGrid
          position={"relative"}
          columns={isLargerThan700 ? 2 : 1}
          gap={5}
          columnGap={5}
         
        >
          {loading ? (
            <>
              <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="3"
                />
              </Box>
              <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="3"
                />
              </Box>
            </>
          ) : empty ? (
            foundIds.map((message) => {
              return (
                <Box key={message} m={"auto"} mb={10} maxW={800}>
                  <Text color={"brand.300"} mt={10} mb={5} fontFamily="Andika">
                    {message}
                  </Text>
                  <Notifyoflost />
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

                  <HStack position={'absolute'} top={'100%'} p={3} w={"100%"} justifyContent={"flex-end"} mb={10}>
                    <Link href="/feeds">
                      <Button
                        bg={"brand.100"}
                        color={"brand.400"}
                        _hover={{
                          bg: "brand.200",
                          color: "brand.400",
                        }}
                      >
                        View more
                      </Button>
                    </Link>
                  </HStack>
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

        <Box
          w={"100%"}
          display={isLargerThan700 ? "none" : "block"}
          bg="brand.400"
          h={"1px"}
          mb={10}
        ></Box>

        {empty ? <></> : <Notifyoflost />}

        <Box
          w={"100%"}
          display={isLargerThan700 ? "none" : "block"}
          bg="brand.400"
          h={"1px"}
          mb={10}
        ></Box>
        <Cta />
      </Container>
    </>
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

export default HomePage;
