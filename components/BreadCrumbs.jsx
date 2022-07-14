import Link from "next/link";
import styles from "../styles/Home.module.css";

const BreadCrumbs = () => {
  return (
    <div className={`${styles.type_of_user} flex`}>
      <Link href="/found">
        <button className={styles.breadcrumbs}>Found a document</button>
      </Link>

      <Link href="/search">
        <button className={styles.breadcrumbs}>Lost a document</button>
      </Link>
    </div>
  );
};

export default BreadCrumbs;
