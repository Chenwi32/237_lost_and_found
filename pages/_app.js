import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: " #08ac10",
      200: "#ff0000",
      300: "#6f7570",
      400: "#fff",
      500: "#41e74a",
    },
  },
});




function MyApp({ Component, pageProps }) {
  return (
    <>
          <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        
        <title>237 Lost & found</title>
      </Head>

      <ChakraProvider theme={theme}>
         <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
       
    </>


  );
}

export default MyApp;
