import styles from './text.module.css';

const Text = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content_grid}>


                <div className={styles.text_side}>
                    <div className={styles.bracket_header}>
                        <span className={styles.line}></span>
                        <label>SYSTEM_INTRO</label>
                    </div>
                    <h2 className={styles.title}>
                        Engineering the <br />
                        <span>Digital Frontier</span>
                    </h2>
                    <p className={styles.paragraph}>
                        NETWORK_CORE is more than a dashboard—it's a high-performance
                        interface designed to synthesize complex data into actionable
                        intelligence. By merging 3D spatial awareness with real-time
                        telemetry, we create environments where information isn't just
                        seen; it's experienced.
                    </p>
                    <button className={styles.action_btn}>INITIALIZE_SYSTEM</button>
                </div>


                <div className={styles.image_side}>
                    <div className={styles.photo_wrapper_main}>
                        <img src={PhotoOne} alt="System View" className={styles.main_img} />
                        <div className={styles.scan_line}></div>
                    </div>
                    <div className={styles.photo_wrapper_sub}>
                        <img src={PhotoTwo} alt="Detail View" className={styles.sub_img} />
                        <div className={styles.corner_accents}></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Text;