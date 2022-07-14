import Link from "next/link";
import Announcement from "../components/Announcement";
import styles from "../styles/Home.module.css";

const Found = () => {
  return (
      <div className="secondary-container docs-menu flex_col">
          <Announcement message={`This feature is not yet functional. Sorry, we are tied to our seats to make it work for you.`}/>
      <h1 className="title">
        Select the type of document you have with you below.
      </h1>

      <ul className={`${styles.document_links} flex_col`}>
        <li className={styles.link_container}>
          <Link href="/nationalIdCollection">
            <a className={styles.link}>
              <span> National ID Card</span>
              <span className={styles.arrow_right}>&#8594;</span>
            </a>
          </Link>
        </li>
        <li className={styles.link_container}>
          <Link href="/passports">
            <a className={styles.link}>
              <span>Passport</span>
              <span className={styles.arrow_right}>&#8594;</span>
            </a>
          </Link>
        </li>
        <li className={styles.link_container}>
          <Link href="/drivingLicence">
            <a className={styles.link}>
              <span>Driving Licence</span>
              <span className={styles.arrow_right}>&#8594;</span>
            </a>
          </Link>
        </li>
        <li className={styles.link_container}>
          <Link href="/certificates">
            <a className={styles.link}>
              <span>Certificate</span>
              <span className={styles.arrow_right}>&#8594;</span>
            </a>
          </Link>
        </li>
        <li className={styles.link_container}>
          <Link href="/otherDocuments">
            <a className={styles.link}>
              <span>Other Documents</span>
              <span className={styles.arrow_right}>&#8594;</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Found;
