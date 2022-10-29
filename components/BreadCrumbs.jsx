import Link from "next/link";
import styles from "../styles/Home.module.css";

const BreadCrumbs = () => {
  return (
    <div className={`${styles.type_of_user} flex`}>
      <Link href="/nationalIdCollection">
        <button className={styles.breadcrumbs}>Found an ID card</button>
      </Link>

      <Link href="/nationalId">
        <button className={styles.breadcrumbs}>Lost an ID card</button>
      </Link>
    </div>
  );
};

export default BreadCrumbs;
