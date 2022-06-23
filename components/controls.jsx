import Link from "next/link";
import styles from './styles/generalComStyles.module.css'

const Controls = ({dataSearch}) => {
  return (
    <div className={`${styles.controls} flex`}>
      <Link href="/">
        <button className={`${styles.to_home} btn2 flex`}>
          <span className={styles.arrow_right}>&#8592;</span> <span>Back to home</span>
        </button>
      </Link>

      <button className={`${styles.search} btn flex`}
        onClick={dataSearch}>
        <span>Search</span>
        <span>
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
};

export default Controls;
