import styles from './About.module.css';
import Mission from './Mission/Mission'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <header className={styles.header}>
                    <h1 className={styles.title}>PROJECT<span>_MANIFESTO</span></h1>
                    <p className={styles.subtitle}>Version 3.0.4 | Tactical Data Visualization Engine</p>
                </header>

                <div className={styles.bentoGrid}>
                    <div className={`${styles.card} ${styles.visionCard}`}>
                        <div className={styles.cardContent}>
                            <label>01 // The Vision</label>
                            <h2>Architecting the Future of Data</h2>
                            <p>
                                NETWORK_CORE is a decentralized monitoring suite designed to bridge
                                the gap between complex global data streams and human intuition.
                                By leveraging 3D spatial awareness and real-time telemetry, we
                                transform raw metrics into actionable intelligence.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.sourceCard}`}>
                        <div className={styles.cardContent}>
                            <label>04 // Source_Code</label>
                            <h2>Open Architecture</h2>
                            <p>Fully open-source architecture built for rapid scalability and high-load performance.</p>
                            <button className={styles.gitBtn}>ACCESS REPOSITORY</button>
                            <div className={styles.codeSnippet}>
                                <code>npm install @network-core/v3</code>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.techCard}`}>
                        <div className={styles.cardContent}>
                            <label>02 // Core Engine</label>
                            <ul className={styles.techList}>
                                <li><span>React</span> 19 UI</li>
                                <li><span>Three</span> 3D Render</li>
                                <li><span>TS</span> Type Safety</li>
                                <li><span>Recharts</span> Data Viz</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.perfCard}`}>
                        <div className={styles.cardContent}>
                            <label>03 // Performance</label>
                            <div className={styles.statContainer}>
                                <div className={styles.statItem}>
                                    <span className={styles.statVal}>60</span>
                                    <span className={styles.statLabel}>FPS Target</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statVal}>100</span>
                                    <span className={styles.statLabel}>MS Latency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Mission/>
            </div>
        </div>
    );
};

export default About;