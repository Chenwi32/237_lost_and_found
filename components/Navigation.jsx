import Link from "next/link";
import styles from "./styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={`${styles.navbar} `}>
      <div className={`${styles.navbar_container} container flex`}>
        <div className="nav_left">
          <Link href="/">
          <a>237L&F</a>
        </Link>
        </div>
        
        <div className={`flex`}>
          <Link href="/contact">
            <span className={`${styles.navbar_btn} `}>Contact Us</span>
          </Link>
          <Link href="#">
            <a className={styles.menu_links}>&#x2753;</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
