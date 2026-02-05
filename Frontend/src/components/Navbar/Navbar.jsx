import styles from './Navbar.modue.css'

 function Navbar() {
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
                <Link to="/">p1</Link>
                <Link to="/">p2</Link>
                <Link to="/">p3</Link>
            </nav>
        </header>
    )
 }

 export default Navbar;