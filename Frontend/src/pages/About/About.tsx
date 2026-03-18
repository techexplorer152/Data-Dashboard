import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>PROJECT<span>_MANIFESTO</span></h1>
                <p className={styles.subtitle}>Version 3.0.4 | Tactical Data Visualization Engine</p>
            </header>

            <div className={styles.bentoGrid}>

                <div className={`${styles.card} ${styles.wide}`}>
                    <label>01 // THE VISION</label>
                    <h2>Architecting the Future of Data</h2>
                    <p>
                        NETWORK_CORE is a decentralized monitoring suite designed to bridge
                        the gap between complex global data streams and human intuition.
                        By leveraging 3D spatial awareness and real-time telemetry, we
                        transform raw metrics into actionable intelligence.
                    </p>
                </div>


                <div className={styles.card}>
                    <label>02 // CORE ENGINE</label>
                    <ul className={styles.techList}>
                        <li><span>React 19</span> - UI Framework</li>
                        <li><span>Three.js</span> - 3D Rendering</li>
                        <li><span>TypeScript</span> - Type Safety</li>
                        <li><span>Recharts</span> - Data Viz</li>
                    </ul>
                </div>


                <div className={styles.card}>
                    <label>03 // PERFORMANCE</label>
                    <div className={styles.statItem}>
                        <span className={styles.statVal}>60 FPS</span>
                        <span className={styles.statLabel}>Target Render Rate</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statVal}>&lt; 100ms</span>
                        <span className={styles.statLabel}>API Latency</span>
                    </div>
                </div>


                <div className={`${styles.card} ${styles.tall}`}>
                    <label>04 // SOURCE_CODE</label>
                    <p>Fully open-source architecture built for scalability and performance.</p>
                    <button className={styles.gitBtn}>ACCESS REPOSITORY</button>
                    <div className={styles.codeSnippet}>
                        <code>npm install @network-core/v3</code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;