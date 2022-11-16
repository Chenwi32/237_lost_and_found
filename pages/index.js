import { Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Actionmenu from "../components/actionmenu";
import Announcement from "../components/Announcement";
import AvilableDocs from "../components/avilableDocs";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      {
        <Head>
          <title>237L&F home page</title>
          <meta name="description" content="237 Lost and Found home page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <div className={`${styles.home} container`}>
        <Heading mt={10}>Welcome to 237 Lost and Found</Heading>
        <Heading fontSize={"1.5rem"} mt={10} mb={10}>
          We are here to help you find your lost document.
        </Heading>

        <Announcement
          message={`This platform is still under construction, so you should expect some undesired behaviours, but we promise you the best in the days ahead`}
        />

        <Actionmenu />

        <Heading fontSize={"1.5rem"} mt={10} mb={5}>
          How the platform works
        </Heading>

        <Text>
          On 237L&F there are just two things; either you found a lost ID card
          or you are searching for a lost ID card, that's it. <br />
          If you found a lost ID card, you should go to the{" "}
          <Link href={`/found`}>Found an ID card</Link> section and fill out the
          form to submit the details required to help the owner of the ID card
          recover it.
        </Text>

        <Text>
          If you lost an ID card, then you should go to the{" "}
          <Link href={`/search`}>Lost an ID card</Link> section. <br />
          Since this platform is still very new, we haven't gotten too many lost
          ID card with us yet, so chances are that you might not be able to find
          your document here; nevertheless, just come back from time to time to
          check, and then spread the word to get more people to know about the
          platform, because the more people know about it, the higher the chance
          that someone who finds your ID card might bring it here. <br />
          To direct someone to the platform, just copy and share this link: "
          <span className="share_link">
            https://lost-and-found-8ef8a.web.app/
          </span>
          " with them for now, we are still working to make the sharing process
          easy. Thank you very much!!
        </Text>
        <Text>
          Let's work together to address this lost ID cards problem!! <br />
          Send us your thought on the project through any of the following
          platforms convenient for you{" "}
          <Link href={`/contact`}>
            <a>here &#8594;</a>
          </Link>
        </Text>

        <Text>
          We will extend our scope to include other documents such as driving
          licences, passports, certficates etc in future.
        </Text>

        <AvilableDocs />
      </div>
    </>
  );
};

export default HomePage;
