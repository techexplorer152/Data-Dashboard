import Background from './HeroBackground/HeroBackground'
import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.backgroundLayer}>
                <Background />
            </div>

            <div className={styles.gridOverlay} />
            <div className={styles.scanLine} />

            <div className={styles.hudContainer}>
                <header className={styles.header}>
                    <div className={styles.logo}>NETWORK<span>_CORE</span></div>
                    <div className={styles.statusPill}>
                        <div className={styles.dot}></div>
                        SYSTEM STATUS: OPTIMAL
                    </div>
                </header>

                <aside className={styles.sidebarLeft}>
                    <div className={styles.terminalCard}>
                        <div className={styles.terminalLine}><span>[OK]</span> INITIALIZING_GLOBE_V3</div>
                        <div className={styles.terminalLine}><span>[OK]</span> SYNC_ECONOMY_DATA</div>
                        <div className={styles.terminalLine}><span>[OK]</span> HEALTH_VITALS_STREAM</div>
                        <div className={styles.terminalLine}><span>[..]</span> FETCHING_SPORTS_LIVE</div>
                    </div>
                    <div className={styles.uplinkText}>&gt;&gt; ENCRYPTED_UPLINK_ESTABLISHED</div>
                </aside>

                <main className={styles.centerContent}>
                    <h1 className={styles.heroTitle}>
                        Global<br /><span>Intelligence</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        A decentralized real-time monitoring engine visualizing humanity's critical data streams.
                    </p>
                    <div className={styles.btnGroup}>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>Initialize Core</button>
                        <button className={`${styles.btn} ${styles.btnSecondary}`}>System Specs</button>
                    </div>
                </main>

                <aside className={styles.sidebarRight}>
                    <div className={styles.statPill}>
                        <span className={styles.statLabel}>ACTIVE NODES</span>
                        <span className={styles.statValue}>14,209</span>
                    </div>
                    <div className={styles.statPill}>
                        <span className={styles.statLabel}>LATENCY</span>
                        <span className={styles.statValue}>24MS</span>
                    </div>
                    <div className={styles.statPill}>
                        <span className={styles.statLabel}>DATA_THROUGHPUT</span>
                        <span className={styles.statValue}>8.4GB/S</span>
                    </div>
                </aside>

                <footer className={styles.footer}>
                    <div>COORDINATES: 41.3275° N, 19.8187° E</div>
                    <div>&copy; 2026 NETWORK_CORE V.3.0.4</div>
                </footer>
            </div>
        </section>
    );
}

export default Hero;