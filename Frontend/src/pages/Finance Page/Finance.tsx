import styles from './Finance.module.css';

const Finance = () => {
    return (
        <div className={styles.container}>
            <header className={styles.pageHeader}>
                <div className={styles.titleGroup}>
                    <h1>FINANCE<span>_NODE</span></h1>
                    <p>Real-time market analytics and economic indicators.</p>
                </div>
                <div className={styles.marketStatus}>
                    <span className={styles.pulse}></span> LIVE MARKET DATA
                </div>
            </header>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <label>NASDAQ</label>
                    <div className={styles.value}>18,239.42</div>
                    <span className={styles.trendUp}>+1.2%</span>
                </div>
                <div className={styles.statCard}>
                    <label>BTC / USD</label>
                    <div className={styles.value}>$94,203.10</div>
                    <span className={styles.trendUp}>+0.8%</span>
                </div>
                <div className={styles.statCard}>
                    <label>GLOBAL GROWTH</label>
                    <div className={styles.value}>2.4%</div>
                    <span className={styles.trendDown}>-0.2%</span>
                </div>
            </div>

            <div className={styles.chartSection}>
                <div className={styles.mainChartPlaceholder}>
                    <p>Visualizing Market Volatility...</p>
                </div>
            </div>
        </div>
    );
};

export default Finance;