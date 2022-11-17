import Success from "../components/success";

import React, { useEffect, useState } from "react";
import Controls from "../components/controls";

import { db } from "../firebase";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";
import { Box, Container } from "@chakra-ui/react";

import BreadCrumbs from "../components/BreadCrumbs";
import Head from "next/head";

const NationalId = () => {
  const [dataInput, setDataInput] = useState("");
  let [found, setfound] = useState([]);
  const [message, setmessage] = useState("Your results will be displayed here");

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

  useEffect(() => {
    // We now call the function to within the useEffect hook since it causes side effects
    getIds();
  }, [dataInput]);

  const idSearch = () => {
    const successfulsearch = foundIds.find((id) => id.idnum === dataInput);

    if (dataInput === "" || dataInput === null) return;

    if (successfulsearch) {
      setfound([successfulsearch]);
      setDataInput("");
    } else {
      setmessage("Sorry We don't have your Id card");
      setDataInput("");
    }
  };

  return (
    <>
      {
        <Head>
          <title>237L&F ID search page</title>
          <meta name="description" content="237 Lost and Foud lost ID card search page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container maxW={1200} minH={"80vh"} mb={10}>
        <BreadCrumbs />

        <Box mb={10}>
<h1 className="title">Type your ID card number.</h1>
          <input
            type="number"
            className="main_input"
            value={dataInput}
            onChange={(e) => {
              setDataInput(e.target.value);
            }}
            placeholder="ID card number"
          />

          </Box>

          <Box mb={10} className="results_display">
            {found.length === 0 ? (
              <h2>{message}</h2>
            ) : found.length !== 0 ? (
              <Success results={found} />
            ) : (
              <h3>There was a mixup somewhere</h3>
            )}
          </Box>
<Controls dataHandler={idSearch} buttonText="search" />
        
          
      </Container>
    </>
  );
};

export default NationalId;
