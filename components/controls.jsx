import Link from "next/link";
import styles from './styles/generalComStyles.module.css'

const Controls = ({ dataHandler, buttonText}) => {
  
  return (
    <div className={`${styles.controls} flex`}>
      <Link href="/">
        <button className={`${styles.to_home} btn2 flex`}>
          <span className={styles.arrow_right}>&#8592;</span> <span>Back to home</span>
        </button>
      </Link>

      <button className={` btn `}
        onClick={dataHandler}>
        {buttonText}
      </button>
    </div>
  );
};

export default Controls;
