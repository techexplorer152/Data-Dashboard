import React from 'react';
import styles from "./HealthCard.module.css";

const HealthCard = () => {
    return (
        <div id="health-card-render" className={styles.cardContainer}>
            <header className={styles.header}>
                <div className={styles.badgeRow}>
                    <div className={styles.liveBadge}>
                        <div className={styles.pulseDot}></div>
                        LIVE VITALS
                    </div>
                    <div className={styles.categoryBadge}>GLOBAL HEALTH INDEX</div>
                </div>
                <h1 className={styles.mainPopulation}>8,280,304,948</h1>
                <div className={styles.subLabel}>Current World Population</div>
            </header>

            <div className={styles.expenditureBox}>
                <div className={styles.expHeader}>
                    <span>Public Healthcare Expenditure Today</span>
                    <span style={{ color: '#3b82f6' }}>Target: 85%</span>
                </div>
                <div className={styles.expValue}>$16,567,645,293</div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                </div>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.gridCol}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Births Today</span>
                        <span className={`${styles.statValue} ${styles.up}`}>+332,809</span>
                    </div>
                    <div style={{ height: '20px' }}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Renewable Energy</span>
                        <span className={styles.statValue} style={{ color: '#3b82f6' }}>64.6M MWh</span>
                    </div>
                </div>
                <div className={styles.gridCol}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Deaths Today</span>
                        <span className={`${styles.statValue} ${styles.down}`}>-156,821</span>
                    </div>
                    <div style={{ height: '20px' }}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>HIV/AIDS Infected</span>
                        <span className={styles.statValue}>47,150,217</span>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <span>Source: Worldometer Real-Time Analytics</span>
                <span>Sensor Status: <span style={{ color: '#10b981' }}>Optimal</span></span>
            </footer>
        </div>
    );
};

export default HealthCard;