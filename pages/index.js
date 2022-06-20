import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>237 Lost & found</title>
      </Head>

      <div className={styles.home}>
        <h1>Select the type of document you have lost below</h1>

        <ul className={`${styles.document_links} flex_col`}>
          <li className={styles.link_container}>
            <Link href="/nationalId">
              <a className={styles.link}>National ID Card</a>
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/passports">
              <a className={styles.link}>Passport</a>
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/drivingLicence">
              <a className={styles.link}>Driving Licence <span></span></a>
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/certificates">
              <a className={styles.link}>Certificate</a>
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/otherDocuments">
              <a className={styles.link}>Other Documents <span></span>  </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
