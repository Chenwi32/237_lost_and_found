import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={`${styles.navbar} flex`}>
      <Link href='/'>
        <Image src="/images/237logo.png" alt="logo" width={130} height={55} />
      </Link>

      <div className={`flex`}>
        <Link href="/contact">
          <a className={styles.menu_links}>Contact Us</a>
        </Link>
        <Link href="#">
          <a className={styles.menu_links}>&#x2753;</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
