import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={`${styles.navbar} flex`}>
      <Link href="/">
     <a> 
          {/* <Image src="/images/logo.png"
            width={100}
            height={50}
          /> */}
          237L&F
      </a>
      </Link>

      <div className={`flex`}>
        <Link href="/contact">
          <span className={`${styles.navbar_btn} `}>Contact Us</span>
        </Link>
        <Link href="#">
          <a className={styles.menu_links}>&#x2753;</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
