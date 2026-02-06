import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './img/Data-Dashboard222.png'

 function Navbar() {
     const [open, setOpen] = useState(false);
    return (
        <header className={styles.container}>
            <Link to="/" aria-label="Go to homepage">
                <img className={styles.icon} src={reactLogo} alt="React logo" />
            </Link>


            <button
                className={styles.burger}
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                onClick={() => setOpen(prev => !prev)}
            >
                <span />
                <span />
                <span />
            </button>


            <nav className={`${styles.navLinks} ${open ? styles.open : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contacts</Link>
            </nav>
        </header>
    )
 }
 export default Navbar