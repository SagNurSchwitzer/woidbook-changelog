import { Navbar } from 'react-bootstrap'
import styles from './navbar.module.css'

export default function AppNavbar() {
    return (
        <Navbar className={styles.navbar} bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/vercel.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            WoidBook
            </Navbar.Brand>
        </Navbar>
    )
}