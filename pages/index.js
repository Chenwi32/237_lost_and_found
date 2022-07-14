import Link from "next/link";
import Announcement from "../components/Announcement";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <div className={`${styles.home}`}>
        <h1>Welcome to 237 Lost and Found</h1>
        <h3>We are here to help you find your lost document.</h3>

        <Announcement
          message={`This platform is still under construction, so lots of it's features are
          still not functional yet, but we promise you the best in future.`}
        />

        <h2 className="title">How the platform works</h2>

        <p>
          On 237L&F there are just two things; either you found a lost document
          or you are searching for a lost document, that's it. <br />
          If you found a lost document, you should go to the{" "}
          <Link href={`/found`}>Found a document</Link> section and follow the
          steps to submit the details required to help the owner of the
          document(s) to recover them.
        </p>
        <p>
          <span className="nb">NB:</span> This feature is not functional as of
          14<sup>th</sup> July 2022, when it will be fully functional, you won't
          see this again.
        </p>

        <p>
          If you lost a document, then you should go to the{" "}
          <Link href={`/search`}>Lost a document</Link> section. Not all the
          features in this section are functional. <br />
          While waiting for the full version, you can take advantage of the
          features that are available now.
          <span className="nb">
            <Link href={`/nationalId`}>The National ID Card</Link> search
            feature is available now{' '}
          </span>
           and the others will be incrementally added. 
          <br />
          Since this platform is still very new, we haven't gotten too many lost
          documents with us yet, so chances are that you might not be able to
          find your document here, but nevertheless, just come back from time to
          time to check.
        </p>

        <hr />
      </div>
    </>
  );
};

export default HomePage;
