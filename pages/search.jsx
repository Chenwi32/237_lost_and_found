import Link from "next/link";
import styles from "../styles/Home.module.css";

const Search = () => {
  return (
    <div className="secondary-container docs-menu flex_col">
      <h1 className="title">Select the type of document you have lost.</h1>

      <ul className={`${styles.document_links} flex_col`}>
        <li className={styles.link_container}>
          <Link href="/nationalId">
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

export default Search;
