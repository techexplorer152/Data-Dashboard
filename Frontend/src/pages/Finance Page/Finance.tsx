import React from 'react';
import styles from "./FinanceCard.module.css";

interface FinanceCardProps {
    telemetryData?: {
        status: string;
        market_trend: string;
        system_load: string;
    };
}

const FinanceCard = ({ telemetryData }: FinanceCardProps) => {
    const trendValue = telemetryData?.market_trend || "0.00%";
    const isPositive = !trendValue.startsWith('-');
    const loadValue = telemetryData?.system_load || "0%";

    return (
        <div id="finance-card-render" className={styles.cardContainer}>
            <header className={styles.header}>
                <div className={styles.labelGroup}>
                    <span className={styles.indexName}>WORLD GDP INDEX</span>
                    <span className={styles.region}>Global / Annual</span>
                </div>
                <div className={`${styles.trendBadge} ${isPositive ? styles.up : styles.down}`}>
                    {isPositive ? '▲' : '▼'} {trendValue}
                </div>
            </header>

            <div className={styles.mainValueSection}>
                <div className={styles.valueLabel}>Current Growth Rate</div>
                <div className={styles.priceDisplay}>{trendValue}</div>
            </div>

            <div className={styles.dataGrid}>
                <div className={styles.dataItem}>
                    <span className={styles.itemLabel}>Volatility</span>
                    <span className={styles.itemValue}>Low</span>
                </div>
                <div className={styles.dataItem}>
                    <span className={styles.itemLabel}>System Load</span>
                    <span className={styles.itemValue}>{loadValue}</span>
                </div>
                <div className={styles.dataItem}>
                    <span className={styles.itemLabel}>Status</span>
                    <span className={styles.itemValue} style={{ color: '#10b981' }}>Tradeable</span>
                </div>
            </div>

            <div className={styles.chartPlaceholder}>
                <div className={styles.barContainer}>
                    {[40, 70, 45, 90, 65, 80, 30, 90].map((h, i) => (
                        <div
                            key={i}
                            className={styles.bar}
                            style={{
                                height: `${h}%`,
                                opacity: i === 7 ? 1 : 0.5,
                                backgroundColor: isPositive ? '#10b981' : '#ef4444'
                            }}
                        />
                    ))}
                </div>
            </div>

            <footer className={styles.footer}>
                <span>Terminal ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                <span>Uplink: Active</span>
            </footer>
        </div>
    );
};

export default FinanceCard;