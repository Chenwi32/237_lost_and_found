import { addDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useCallback, useState } from "react";
import Announcement from "../components/Announcement";
import Controls from "../components/controls";
import { db } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import styles from "../styles/idcollection.module.css";
import { Box, Button, Container, Flex, Heading, SkeletonCircle, Text, useMediaQuery } from "@chakra-ui/react";
import BreadCrumbs from "../components/BreadCrumbs";
import Head from "next/head";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { useDropzone } from "react-dropzone";
import storage from "../firebase";

const NationalIdCollection = () => {
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
          setIdimage(downloadURL)
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
    };

    if (idnum !== "" && phoneNumber !== "" && name !== "") {
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
    } else {
      alert(
        "Some field are still empty. Please make sure you fill in all the information required. Thank you."
      );
    }
  };

  return (
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
        <Announcement message="Everyone can now add data of id cards that they find here till December 31 2022, after that, only people who own an account on the platform will be able to add data to the platform." />

        <Heading fontSize={"1.5rem"} mb={5}>
          Fill in the imformation required to help the person recover his/her ID
          card.
        </Heading>

        <Heading fontSize={"1rem"}>
          NB: <small>All the fields with the asterisk (*) are obligatory</small>
        </Heading>

        <Box mb={10} w="fit-content" className={styles.idform_container}>
          <p>* Type the ID card number here:</p>
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
          <p>* Type the name on the ID card here:</p>
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
          <p>Type your location here:</p>
          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            placeholder="Your Location"
            className={`main_input`}
          />
          <Flex direction={"column"}>
            <Text>
              Type your contact information for the ID collection here:
            </Text>
            <label htmlFor="phoneNumber">* Phone number (whatsapp/call)</label>

            <Flex mb={5}>
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
            </Flex>

            <label htmlFor="email">Email (optional)</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              className={`main_input`}
              name="email"
            />
          </Flex>
          <p>Upload an image of the ID card here:</p>


          {/*  Drag and drop */}
          
          <Flex
            mt={5}
            justifyContent={"space-between"}
            flexDirection={"column"}
            alignItems={"center"}
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            <Box w={"fit-content"}>
              <Box>
                {downloadUrl === "" ? (
                  <Flex
                    border="1px"
                    alignItems={"center"}
                    justifyContent={"center"}
                    bg={"brand.500"}
                    width={isLargerThan700 ? 400 : 250}
                    height={isLargerThan700 ? 300 : 200}
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
                    width={500}
                    height={400}
                  ></iframe>
                </Box>
              )}
            </Box>
          </Flex>
        </Box>
        <Controls dataHandler={sendData} buttonText={btnText} />

        <ToastContainer />
      </Container>
    </>
  );
};

export default NationalIdCollection;
export const Spin = () => (
  <Box mt={4}>
   <Button
    isLoading
    loadingText='Loading'
    colorScheme='teal'
    variant='outline'
    spinnerPlacement='start'
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