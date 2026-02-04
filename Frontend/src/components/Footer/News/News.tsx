import styles from './News.module.css'

function News(){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Newsletter</h2>
            <p className={styles.subtitle}>Receive product updates news, exclusive discounts and early access.</p>

            <div className={styles.news}>
                <span className={styles.icon}>@</span>
                <input
                    type="email"
                    className={styles.input}
                    placeholder="Enter your email..."
                />
                <button className={styles.button}>
                    <span className={styles.arrow}>→</span>
                </button>
            </div>
        </div>
    )
}

export default News;