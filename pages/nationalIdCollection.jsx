import { doc, setDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
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
  Image,
  Input,
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
  const [uploadbtnText, setUploadBtntext] = useState("Upload");

  // Drag and drop functionality

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const [downloadUrl, setDownloadUrl] = useState("");

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleUpload = () => {
    const mountainsRef = ref(storage, "foundIds/" + selectedFile.name);
    uploadBytesResumable(mountainsRef, selectedFile).then((snapshot) => {
      setUploadBtntext('Uploading...')
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setDownloadUrl(downloadURL);
        setIdimage(downloadURL);
      setUploadBtntext('Uploaded')
      });
    });
  };
 

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
    setSelectedFile(undefined)
    onClose()
  };

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEmtyIn = () => {
    if (idnum === "" || email === "" || phoneNumber === "" || name === "") {
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
                  * Your email :
                </Text>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Your Email"
                  className={`main_input `}
                  required
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

            {/* Image upload */}

            <Flex width={'100%'} mt={10} mb={10} alignItems='center' justifyContent='space-between'>
              <input
                type="file"
              
                accept="image/*"
                onChange={(e) => {
                  if (!e.target.files || e.target.files.length === 0) {
                    setSelectedFile(undefined);
                    return;
                  }
                  // Selects just one file

                  setSelectedFile(e.target.files[0]);
                }}
              />

              <Button
                color={"brand.400"}
                bg={"brand.100"}
                _hover={{
                  bg: "brand.200",
                }}
                mr={3}
                onClick={handleUpload}
              >
                {uploadbtnText}
              </Button>
            </Flex>

            <Box mt={5} w={"100%"}>
              {selectedFile && (
                <Image
                  src={preview}
                  width={isLargerThan700 ? 500 : 300}
                  height={isLargerThan700 ? 400 : 300}
                  alt='Uploaded Id card image'
                />
              )}
            </Box>
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
                  {btnText}
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


