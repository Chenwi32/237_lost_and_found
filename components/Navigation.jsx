import Link from "next/link";
import styles from './styles/Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.navbar}>
            <img src="/237logo.png" alt="logo"
                width={150}
                height={70} />
            
            <div className={styles.menu}>
                <Link href="/">
                    <a className={styles.menu_links}>Contact Us</a>
                </Link>
                <Link href="#">
                <a className={styles.menu_links} >&#x2753;</a></Link>
            </div>
            
        </div>
    );
}

export default Navigation;