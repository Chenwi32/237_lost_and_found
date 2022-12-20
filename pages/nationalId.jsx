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
import { Box, Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";

import BreadCrumbs from "../components/BreadCrumbs";
import Head from "next/head";

const NationalId = () => {
  const [nameInput, setnameInput] = useState("");
  const [dataInput, setDataInput] = useState("");
  const [found, setfound] = useState([]);
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
  }, [nameInput]);

  /* ID search by ID name */

  const idSearchName = () => {
    const successfulsearch = foundIds.filter((id) => id.name == nameInput);

    if (nameInput === "" || nameInput === null) return;

    if (successfulsearch) {

      
      
      setfound(successfulsearch);


      setDataInput("");
    } else {
      setmessage("Sorry We don't have your Id card");
      setDataInput("");
    }
  };


  /* ID search by by ID num */
  const idSearchIdnum = () => {
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
          <meta
            name="description"
            content="237 Lost and Foud lost ID card search page"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container maxW={900} minH={"80vh"} mb={10}>
        <BreadCrumbs />

        <Tabs color={"brand.500"} variant="enclosed">
          <TabList color={"brand.400"} mb={5}>
            <Tab>Search by Name</Tab>
            <Tab>Search by ID number</Tab>
          </TabList>
          <TabPanels>
            <TabPanel >
              <VStack mb={10}>
                <Heading fontSize={"1.5rem"} color={"brand.400"} mb={5}>
                  Type your name and click on search.
                </Heading>

                <input
                  type="text"
                  className="main_input"
                  value={nameInput}
                  onChange={(e) => {
                    setnameInput(e.target.value);
                  }}
                  placeholder="Name as on ID card "
                />
              </VStack>
              <Controls dataHandler={idSearchName} buttonText="search" />
            </TabPanel>
            <TabPanel>
              <VStack mb={10}>
                <Heading
                  color={"brand.400"}
                  fontSize={"1.5rem"}
                  textAlign="center"
                  mb={5}
                >
                  Type your ID card number.
                </Heading>
                <input
                  type="number"
                  className="main_input"
                  value={dataInput}
                  onChange={(e) => {
                    setDataInput(e.target.value);
                  }}
                  placeholder="ID card number"
                />
              </VStack>
              <Controls dataHandler={idSearchIdnum} buttonText="search" />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Container
          mb={10}
          mt={5}
          maxW={900}
          boxShadow={"lg"}
          border={"1px solid #00ebc7"}
          p={5}
          align={"center"}
        >
          {found.length === 0 ? (
            <Box>
              <Heading color={"brand.400"} fontSize={"1.5rem"}>
                {message}
              </Heading>
            </Box>
          ) : found.length !== 0 ? (
            <Success results={found} />
          ) : (
            <h3>There was a mixup somewhere</h3>
          )}
        </Container>
      </Container>
    </>
  );
};

export default NationalId;
