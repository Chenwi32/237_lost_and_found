import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div className={`${styles.contact} secondary-container`}>
    
      <h2>
        You can reach us through any of these platforms that is convenient for
        you
      </h2>
      <div>
        <a
          href="https://wa.me/+237651395832"
          target="blank"
          className={`${styles.contact_link} flex_col`}
        >
          <span className={styles.link_text}>Whatsapp</span>
        </a>
        <a
          href="https://web.facebook.com/237-Lost-Found-102525172535103"
          target="blank"
          className={`${styles.contact_link} flex_col`}
        >
          <span className={styles.link_text}>Facebook</span>
        </a>
        <a
          href="tell:+237651395832"
          className={`${styles.contact_link} flex_col`}
        >
          <span className={styles.link_text}>Call</span>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Contact;
