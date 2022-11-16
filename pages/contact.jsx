import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Container, Heading, IconButton } from "@chakra-ui/react";
import styles from "../styles/contact.module.css";

import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
  return (
    <Container minH={"80vh"}>
      <div className={`${styles.contact}`}>
        <Heading>
          You can reach us through any of these platforms that is convenient for
          you.
        </Heading>
        <div>
          <a
            href="https://wa.me/+237651395832"
            target="blank"
            className={`${styles.contact_link} flex_col`}
          >
            <IconButton
              colorScheme="teal"
              size="lg"
              width="20"
              height="20"
              padding={5}
              icon={<FontAwesomeIcon icon={faWhatsapp} />}
            />

            <span className={styles.link_text}>Whatsapp</span>
          </a>
          <a
            href="https://web.facebook.com/237-Lost-Found-102525172535103"
            target="blank"
            className={`${styles.contact_link} flex_col`}
          >
            <IconButton
              colorScheme="teal"
              size="lg"
              width="20"
              height="20"
              padding={5}
              icon={<FontAwesomeIcon icon={faFacebookF} />}
            />

            <span className={styles.link_text}>Facebook</span>
          </a>

          <a
            href="mailto:chenwieugene.j@gmail.com"
            _target="_blank"
            className={`${styles.contact_link} flex_col`}
          >
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Send email"
              size="lg"
              width="20"
              height="20"
              padding={5}
              icon={<EmailIcon />}
            />
            <span className={styles.link_text}>chenwieugene.j@gmail.com</span>
          </a>

          <a
            href="tel:+237651395832"
            className={`${styles.contact_link} flex_col`}
          >
            <IconButton
              colorScheme="teal"
              aria-label="Call Segun"
              size="lg"
              width="20"
              height="20"
              padding={5}
              icon={<PhoneIcon />}
            />
            <span className={styles.link_text}>Call</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
