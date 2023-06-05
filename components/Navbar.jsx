import Link from "next/link"
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return(
        <>
            <ul className={styles.navbar}>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/addBook">Add Book</Link>
                <Link className={styles.link} href="/addAuthor">Add Author</Link>
                <Link className={styles.link} href="/bookList">Book List</Link>
                <Link className={styles.link} href="/authorList">Author List</Link>
            </ul>
        </>
    )
}

export default Navbar