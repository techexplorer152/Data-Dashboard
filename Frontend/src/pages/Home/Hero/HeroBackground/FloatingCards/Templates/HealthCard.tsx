import React from 'react';
import styles from "./HealthCard.module.css";

interface HealthCardProps {
    telemetryData?: {
        status: string;
        system_load: string;
        active_nodes: number;
        global_stats?: {
            population: number;
            source: string;
        };
    };
}

const HealthCard = ({ telemetryData }: HealthCardProps) => {
    const isOperational = telemetryData?.status === 'OPERATIONAL';
    const loadValue = telemetryData?.system_load || "0%";

    const rawPop = telemetryData?.global_stats?.population || 8280304948;
    const displayPop = rawPop.toLocaleString();

    const birthsToday = Math.floor(rawPop * 0.00004).toLocaleString();
    const deathsToday = Math.floor(rawPop * 0.000018).toLocaleString();
    const expenditure = (rawPop * 2.15).toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

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
                <h1 className={styles.mainPopulation}>{displayPop}</h1>
                <div className={styles.subLabel}>Current World Population</div>
            </header>

            <div className={styles.expenditureBox}>
                <div className={styles.expHeader}>
                    <span>Public Healthcare Expenditure Today</span>
                    <span style={{ color: '#3b82f6' }}>Load: {loadValue}</span>
                </div>
                <div className={styles.expValue}>{expenditure}</div>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: loadValue }}
                    ></div>
                </div>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.gridCol}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Births Today</span>
                        <span className={`${styles.statValue} ${styles.up}`}>+{birthsToday}</span>
                    </div>
                    <div style={{ height: '20px' }}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Active Uplinks</span>
                        <span className={styles.statValue} style={{ color: '#3b82f6' }}>
                            {telemetryData?.active_nodes || 0} Nodes
                        </span>
                    </div>
                </div>
                <div className={styles.gridCol}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Deaths Today</span>
                        <span className={`${styles.statValue} ${styles.down}`}>-{deathsToday}</span>
                    </div>
                    <div style={{ height: '20px' }}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>HIV/AIDS Infected</span>
                        <span className={styles.statValue}>47,150,217</span>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <span>Source: {telemetryData?.global_stats?.source || "World Bank"}</span>
                <span>Sensor Status: <span style={{ color: isOperational ? '#10b981' : '#ef4444' }}>
                    {isOperational ? 'Optimal' : 'Interrupted'}
                </span></span>
            </footer>
        </div>
    );
};

export default HealthCard;