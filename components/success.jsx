import Link from "next/link";
import styles from "./styles/success.module.css";

const Success = ({ results }) => {
  return (
    <div className={styles.success_container}>
      <h1 className={styles.success_header}>
        Great news!!! we found your document.
      </h1>

      {results.map((result) => {
        return (
          <div key={result.id} className={styles.message_container}>
            <h1>
              Here is your document identification detail: <br />
              <span className={styles.doc_infomation}>{result.idNum}</span>
            </h1>
            <p>It is available for collection at {result.location}.</p>
            <p>You can call the following number: <br /> {result.contact} </p>

            <hr />

            <p>Please let us know when you collect it and please don't forget to share the news about our plartform to help other people too.</p>
            <p>
              If you have any issues, please do not hesitate to <Link href='/contact'><a>contact</a></Link> us.
            </p>
            <p>
              Thank you for trusting us. We are so grateful we could help you.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Success;
