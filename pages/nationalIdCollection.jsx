import { addDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Controls from "../components/controls";
import { db } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import styles from "../styles/idcollection.module.css";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import BreadCrumbs from "../components/BreadCrumbs";
import Head from "next/head";

const NationalIdCollection = () => {
  const [idnum, setIdnum] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [email, setEmail] = useState("");
  const [idimage, setIdimage] = useState();
  const [btnText, setBtntext] = useState("Send");

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

    if (idnum !== "" && contact !== "" && location !== "" && idimage !== "") {
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
    } else {
      alert(
        "Some field are still empty. Please make sure you fill in all the information required. Thank you."
      );
    }

    setIdnum("");
    setName("");
    setLocation("");
    setPhoneNumber("");
    setEmail("");
    setIdimage("");
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

      <Container maxW={1200} mb={10}>
        <BreadCrumbs />
        <Announcement message="Everyone can now add data of id cards that they find here till December 31 2022, after that, only people who own an account on the platform will be able to add data to the platform." />
        <Box mb={10} className={styles.idform_container}>
          <p>* Type the ID card number here:</p>
          <input
            value={idnum}
            onChange={(e) => {
              setIdnum(e.target.value);
            }}
            type="text"
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
                value={countryCode}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                number
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
                pattern= "[0-9]"
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
              placeholder="Your Contact information"
              className={`main_input`}
              name="email"
            />
          </Flex>

          <p>Upload an image of the ID card here:</p>
          <input
            value={idimage}
            onChange={(e) => {
              setIdimage(e.target.value);
            }}
            type="file"
            placeholder="Your Contact information"
          />
        </Box>
        <Controls dataHandler={sendData} buttonText={btnText} />

        <ToastContainer />
      </Container>
    </>
  );
};

export default NationalIdCollection;
