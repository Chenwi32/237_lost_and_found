import { addDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Controls from "../components/controls";
import { db } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import styles from "../styles/idcollection.module.css";
import { Box, Container } from "@chakra-ui/react";
import BreadCrumbs from "../components/BreadCrumbs";
import Head from "next/head";

const NationalIdCollection = () => {
  const [idnum, setIdnum] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [idimage, setIdimage] = useState();
  const [btnText, setBtntext] = useState("Send");

  const sendData = async () => {
    const timestamp = Date.now().toString();

    const addedFIds = doc(db, `idcards/${timestamp}`);

    const foundId = {
      idnum,
      name,
      location,
      contact,
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
    setContact("");
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
          <p>Type the ID card number here:</p>
          <input
            value={idnum}
            onChange={(e) => {
              setIdnum(e.target.value);
            }}
            type="text"
            placeholder="ID card Number"
            className={`main_input `}
          />
          <p>Type the name on the ID card here:</p>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Holder's Name"
            className={`main_input`}
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

          <p>Type your contact information for the ID collection here:</p>
          <input
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
            type="text"
            placeholder="Your Contact information"
            className={`main_input`}
          />

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
