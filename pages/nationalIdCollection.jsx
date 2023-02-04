import { doc, setDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import Controls from "../components/controls";
import { db } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import BreadCrumbs from "../components/BreadCrumbs";
import Head from "next/head";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { useDropzone } from "react-dropzone";
import storage from "../firebase";
import Announcement from "../components/Announcement";
import ProtectedRoute from "../components/protectedroute";
import { useAuth } from "../components/authcontprov";

const NationalIdCollection = () => {
  const { user } = useAuth();

  const {
    isOpen: isVisible,
    onClose: onClose2,
    onOpen: onOpen2,
  } = useDisclosure({ defaultIsOpen: true });

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const [idnum, setIdnum] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] = useState("");
  const [idimage, setIdimage] = useState(null);
  const [btnText, setBtntext] = useState("Send");

  // Drag and drop functionality
  const [spin, setSpin] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    setSpin(true);
    const file = acceptedFiles[0];
    const mountainsRef = ref(storage, "foundIds/" + file.name);

    uploadBytesResumable(mountainsRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setDownloadUrl(downloadURL);
        setIdimage(downloadURL);
        setSpin(false);
      });
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  ////////////////////////////////

  const sendData = async () => {
    const timestamp = Date.now().toString();

    const addedFIds = doc(db, `idcards/${timestamp}`);

    const foundId = {
      idnum,
      name,
      location,
      phoneNumber,
      email,
      idimage,
      user,
    };

    setBtntext("Sending...");
    try {
      await setDoc(addedFIds, foundId).then(() => {
        setBtntext("Send");
      });
      toast(
        "The information has been sent successfully. Thank you for the efforts",
        {
          hideProgressBar: true,
          autoClose: 6000,
          type: "success",
        }
      );
    } catch (error) {
      console.log(error);
    }

    setIdnum("");
    setName("");
    setLocation("");
    setPhoneNumber("");
    setEmail("");
    setIdimage("");
  };

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEmtyIn = () => {
    if (idnum === "" && phoneNumber === "" && name === "") {
      return toast(
        "Some field are still empty. Please make sure you fill in all the nformation required. Thank you.",
        {
          hideProgressBar: true,
          autoClose: 6000,
          type: "error",
        }
      );
    } else {
      onOpen();
    }
  };

  return (
    <ProtectedRoute>
      <>
        {
          <Head>
            <title>237L&F ID collection page</title>
            <meta
              name="description"
              content="237 Lost and Foud | found ID card collection page"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        }

        <Container maxW={900} mb={10} mt={10}>
          <BreadCrumbs />

          {isVisible ? (
            <Alert status="success" mb={10}>
              <AlertIcon />
              <Box>
                <AlertTitle>Attention!!</AlertTitle>
                <AlertDescription>
                  Congratulations!!! <br />
                  You can now be able to input data of found documents to help
                  the owners recover them. <br />
                  Thank you for your trust.
                </AlertDescription>
              </Box>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={onClose2}
              />
            </Alert>
          ) : (
            <></>
          )}
          <Container maxW={900}>
            <Heading
              color={"brand.400"}
              fontSize={"1.5rem"}
              mb={5}
              textAlign={"center"}
            >
              Fill in the information required to help the person recover
              his/her ID card.
            </Heading>

            <Announcement
              message={
                "NB: All the fields with the asterisk (*) are obligatory. We value your privacy a lot, so we will not disclose your contact information to unauthorized people."
              }
            />

            <SimpleGrid color={"brand.500"} columns={2} gap={3} mb={5}>
              <Box>
                <Text fontSize={"0.9rem"} mb={2}>
                  * ID card number :
                </Text>
                <input
                  value={idnum}
                  onChange={(e) => {
                    setIdnum(e.target.value);
                  }}
                  type="number"
                  placeholder="ID card Number"
                  className={`main_input `}
                  required
                />
              </Box>

              <Box>
                <Text fontSize={"0.9rem"} mb={2}>
                  * Holder"s Name :
                </Text>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Holder's Name"
                  className={`main_input`}
                  required
                />
              </Box>

              <Box>
                <Text fontSize={"0.9rem"} mb={2}>
                  Your location :
                </Text>
                <input
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  type="text"
                  placeholder="Your Location"
                  className={`main_input `}
                  required
                />
              </Box>
              <Box>
                <Text fontSize={"0.9rem"} mb={2}>
                  Your email :
                </Text>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Your Email"
                  className={`main_input `}
                />
              </Box>
            </SimpleGrid>

            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Phone number (whatsapp/call)
              </Text>

              <HStack mb={5}>
                <input
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  type="tel"
                  placeholder="code"
                  name="phoneNumber"
                  list="defaultTels"
                  className="phonecode"
                  required
                />

                <datalist id="defaultTels">
                  <option value="+237">Cameroon</option>
                  <option value="+234">Nigeria</option>
                  <option value="+233">Ghana</option>
                </datalist>

                <input
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder="Your phone number"
                  className={`main_input`}
                  name="phoneNumber"
                  pattern="[0-9]"
                  required
                />
              </HStack>
            </Box>

            <Text textAlign={"center"} fontSize={"0.9rem"} mb={2}>
              Upload an image of the ID card here:
            </Text>

            {/*  Drag and drop */}

            <Flex
              w={"fit-content"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              alignItems={"center"}
              {...getRootProps()}
              m={"auto"}
              mb={10}
            >
              <input {...getInputProps()} />

              <Box w={"fit-content"}>
                <Box>
                  {downloadUrl === "" ? (
                    <Flex
                      border="1px"
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"brand.101"}
                      width={isLargerThan700 ? 400 : 300}
                      height={isLargerThan700 ? 300 : 250}
                      flexDirection={"column"}
                    >
                      <UploadIcon /> <Text m={0}>Drag and drop</Text>{" "}
                    </Flex>
                  ) : (
                    <></>
                  )}
                </Box>
                {spin ? (
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    <Spin />
                  </Flex>
                ) : (
                  <></>
                )}
                {downloadUrl === "" ? (
                  <></>
                ) : (
                  <Box mt={5} w={"100%"}>
                    <iframe
                      src={downloadUrl}
                      allowFullScreen
                      width={isLargerThan700 ? 500 : 300}
                      height={isLargerThan700 ? 400 : 300}
                    ></iframe>
                  </Box>
                )}
              </Box>
            </Flex>
          </Container>
          <Controls dataHandler={handleEmtyIn} buttonText={btnText} />
          <ToastContainer />
          {/* Modal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Check if everything is okay</ModalHeader>
              <ModalCloseButton
                color={"brand.400"}
                _hover={{
                  bg: "brand.200",
                }}
              />
              <ModalBody>
                <VStack alignItems={"flex-start"}>
                  <HStack>
                    <Text>ID Number:</Text>
                    <Text fontWeight={600} color={"brand.400"}>
                      {idnum}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text>Holder's name:</Text>
                    <Text fontWeight={600} color={"brand.400"}>
                      {name}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text>Your Location:</Text>
                    <Text fontWeight={600} color={"brand.400"}>
                      {location}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text>Your email:</Text>
                    <Text fontWeight={600} color={"brand.400"}>
                      {email}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text>Phone number:</Text>
                    <Text fontWeight={600} color={"brand.400"}>
                      {phoneNumber}
                    </Text>
                  </HStack>
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Button
                  color={"brand.400"}
                  bg={"brand.200"}
                  _hover={{
                    bg: "brand.100",
                  }}
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button
                  onClick={sendData}
                  _hover={{
                    bg: "brand.200",
                  }}
                  bg={"brand.100"}
                  color={"brand.400"}
                >
                  Send
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Container>
      </>
    </ProtectedRoute>
  );
};

export default NationalIdCollection;

/* Spin to show that the image is uploading */
export const Spin = () => (
  <Box mt={4}>
    <Button
      isLoading
      loadingText="Loading"
      colorScheme="teal"
      variant="outline"
      spinnerPlacement="start"
    ></Button>
  </Box>
);
export const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
  </svg>
);
