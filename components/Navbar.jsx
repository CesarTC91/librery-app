import Link from "next/link"
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return(
        <>
            <ul className={styles.navbar}>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/news">News</Link>
                <Link className={styles.link} href="/contact">Contact</Link>
                <Link className={styles.link} href="/addBook">Add Book</Link>
            </ul>
        </>
    )
}

export default Navbar