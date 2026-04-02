import Linkedin from './img/linkedin-white-icon.png';
import Github from './img/git hub white.png';
import MailIcon from './img/mail (1).png';
import PhoneIcon from './img/telephone.png';
import SendIcon from './img/send icon.png';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.container}>
            <div className={styles.left_part}>
                <h1 className={styles.big_title}>
                    Establish<span>_Uplink</span>
                </h1>
                <p className={styles.description}>
                    Have a project or a system inquiry? Initialize a direct communication channel below.
                </p>

                <div className={styles.info_grid}>
                    <div className={styles.contact_item}>
                        <div className={styles.icon_box}>
                            <img src={PhoneIcon} alt="Phone" className={styles.custom_icon} />
                        </div>
                        <div>
                            <h3>TELEPHONY</h3>
                            <a href="tel:+33333333" target="_blank" rel="noopener noreferrer">+333 333 33</a>
                        </div>
                    </div>

                    <div className={styles.contact_item}>
                        <div className={styles.icon_box}>
                            <img src={MailIcon} alt="Mail" className={styles.custom_icon} />
                        </div>
                        <div>
                            <h3>ENCRYPTED_MAIL</h3>
                            <a href="mailto:hey@gmail.com" target="_blank" rel="noopener noreferrer">hey@gmail.com</a>
                        </div>
                    </div>

                    <div className={styles.contact_item}>
                        <div className={styles.icon_box}>
                            <img src={Linkedin} alt="LinkedIn" className={styles.custom_icon} />
                        </div>
                        <div>
                            <h3>PROFESSIONAL_NODE</h3>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">linkedin.com/in/user</a>
                        </div>
                    </div>

                    <div className={styles.contact_item}>
                        <div className={styles.icon_box}>
                            <img src={Github} alt="Github" className={styles.custom_icon} />
                        </div>
                        <div>
                            <h3>SOURCE_REPOSITORY</h3>
                            <a href="https://github.com/techexplorer152" target="_blank" rel="noopener noreferrer">github.com/techexplorer152</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.right_part}>
                <div className={styles.contact_box}>
                    <div className={styles.card_header}>
                        <span className={styles.terminal_text}>[MESSAGE_CONSTRUCT]</span>
                        <div className={styles.status_dot}></div>
                    </div>

                    <div className={styles.input_group}>
                        <div className={styles.row}>
                            <input className={styles.glitch_input} placeholder="IDENTIFIER (NAME)" />
                            <input className={styles.glitch_input} placeholder="PROTOCOL (SUBJECT)" />
                        </div>
                        <textarea className={styles.glitch_textarea} placeholder="TRANSMISSION_BODY (MESSAGE)"></textarea>
                    </div>

                    <button className={styles.send_btn}>
                        <img src={SendIcon} alt="Send" className={styles.btn_icon} />
                        EXECUTE_SEND
                    </button>

                    <div className={styles.card_corners}></div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;