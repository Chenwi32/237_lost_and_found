import Success from "../components/success";

import React, { useEffect, useState } from "react";
import Controls from "../components/controls";

import { db } from "../firebase";
import { collection, query, getDocs } from "@firebase/firestore";
import {
  Box,
  Container,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

import Head from "next/head";

const NationalId = (props) => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const {results} = props

  const [nameInput, setnameInput] = useState("");
  const [dataInput, setDataInput] = useState("");
  const [found, setfound] = useState([]);
  const [message, setmessage] = useState("Your results will be displayed here");

  

  /* ID search by ID name */

  const idSearchName = () => {

    const successfulsearch = results.filter((id) => id.name === nameInput);

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
    const successfulsearch = results.find((id) => id.idnum === dataInput);

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

      <Container maxW={900} mt={20} minH={"80vh"} mb={10}>
        <Tabs isFitted color={"brand.500"} variant="enclosed">
          <TabList m={"auto"} maxW={500} color={"brand.400"} mb={10}>
            <Tab _selected={{ color: "brand.400", bg: "brand.100" }}>
              Search by Name
            </Tab>
            <Tab _selected={{ color: "brand.400", bg: "brand.100" }}>
              Search by ID number
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack mb={10}>
                <Heading
                  fontFamily="Andika"
                  fontSize={"1.5rem"}
                  color={"brand.400"}
                  mb={5}
                >
                  Type your name and click on search.
                </Heading>

                <Input
                  type="text"
                  
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
                  fontFamily="Andika"
                >
                  Type your ID card number.
                </Heading>
                <Input
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
          p={isLargerThan700 ? 5 : "1rem 0.5rem"}
          align={"center"}
        >
          {found.length === 0 ? (
            <Box>
              <Heading
                color={"brand.400"}
                fontSize={"1.5rem"}
                fontFamily="Andika"
              >
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

export default NationalId;
