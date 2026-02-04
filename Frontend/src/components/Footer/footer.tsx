import styles from './footer.module.css'
import Top from './Top/top.tsx'
import Logo from './img/Data-Dashboard222.png'
import facebook from './icons/facebook-white-icon.png'
import whatsapp from './icons/whatsapp-white-icon.png'
import insta from './icons/instagram-white-icon.png'
import Input from './News/News.tsx'
import ReactIcon from './icons/React logo.png'

function Footer() {
    return (
        <footer >
            <Top/>

            <div className={styles.container}>
                <div className={styles.row1}>
                    <img src={Logo}/>
                    <p>Stay Informed!</p>
                </div>
                <div className={styles.row2}>
                    <div className={styles.linksGroup}>
                        <div className={styles.link}>
                            <h1>Navigation</h1>

                            <a href="/">Home</a>
                            <a href="/s">Services</a>
                            <a href="/swe">About</a>
                            <a href="/swee">Contact</a>
                        </div>
                        <div className={styles.link}>
                            <h1>Contact</h1>

                            <a href="/"><img src={whatsapp}/>+333 3333 33</a>
                            <a href="/s"><img src={facebook}/> dashboard/facebook.com</a>
                            <a href="/swe"><img src={insta}/>dashboard/instagram.com</a>
                        </div>
                    </div>

                    <div className={styles.Newsletter}> <Input/></div>



                </div>

                <div className={styles.row3}>
                    <div className={styles.bottom}>
                        © {new Date().getFullYear()} TechExplorer. All rights reserved.
                    </div>

                    <div>
                        Made with <img src={ReactIcon}/>
                    </div>


                </div>
            </div>



        </footer>
    )
}
export default Footer