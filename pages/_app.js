import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";


import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
          <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        
        <title>237 Lost & found</title>
      </Head>

      <ChakraProvider>
         <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
       
    </>


  );
}

export default MyApp;
