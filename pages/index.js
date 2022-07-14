import Link from "next/link";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      
      <div className={`${styles.home} flex_col`}>
        <h1>Welcome to 237 Lost and Found</h1>
        <h3>We are here to help you find your lost document.</h3>
        <p>
          This platform is still under construction so lots of it's features are
          still not functional yet, but we promise you the best in future.{" "}
          <br />
          While waiting for the full version, you can take advantage of the
          features that are available now. The National ID Card search feature
          is available now and the others will be incrementally added. Just
          click on the option below and follow the next steps.
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
