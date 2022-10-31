import Link from "next/link";
import Announcement from "../components/Announcement";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <div className={`${styles.home} container`}>
        <h1>Welcome to 237 Lost and Found</h1>
        <h3>We are here to help you find your lost document.</h3>

        <Announcement
          message={`This platform is still under construction, so you should expect some undesired behaviours, but we promise you the best in the days ahead`}
        />

        <h2 className="title">How the platform works</h2>

        <p>
          On 237L&F there are just two things; either you found a lost ID card
          or you are searching for a lost ID card, that's it. <br />
          If you found a lost ID card, you should go to the{" "}
          <Link href={`/found`}>Found an ID card</Link> section and fill out the
          form to submit the details required to help the owner of the ID card
          recover it.
        </p>

        <p>
          If you lost an ID card, then you should go to the{" "}
          <Link href={`/search`}>Lost an ID card</Link> section. <br />
          Since this platform is still very new, we haven't gotten too many lost
          ID card with us yet, so chances are that you might not be able to find
          your document here; nevertheless, just come back from time to time to
          check, and then spread the word to get more people to know about the
          platform, because the more people know about it, the higher the chance
          that someone who finds your ID card might bring it here. <br />
          To direct someone to the platform, just copy and share this link:
         "<span className="share_link">
https://lost-and-found-8ef8a.web.app/

          </span>" with them for now, we are still working to make the sharing process easy. Thank you very much!!
        </p>
        <p>
          Let's work together to address this lost ID cards problem!! <br />
          Send us your thought on the project through any of the following platforms convenient
          for you{" "}
          <Link href={`/contact`}>
            <a>here &#8594;</a>
          </Link>
        </p>

        <p>
          We will extend our scope to include other documents such as driving licences, passports, certficates etc in future.
        </p>
      </div>
    </>
  );
};

export default HomePage;
