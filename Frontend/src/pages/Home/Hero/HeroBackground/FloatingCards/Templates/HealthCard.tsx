import styles from "./HealthCard.module.css";

interface HealthCardProps {
    telemetryData?: {
        status: string;
        system_load: string;
        active_nodes: number;
        global_stats?: {
            population: number;
            life_expectancy: string;
            health_expenditure: string;
            source: string;
        };
    };
}

const HealthCard = ({ telemetryData }: HealthCardProps) => {
    const isOperational = telemetryData?.status === 'OPERATIONAL';
    const loadValue = telemetryData?.system_load || "0%";
    const stats = telemetryData?.global_stats;

    // Data Mapping
    const displayPop = stats?.population?.toLocaleString() || "8,280,304,948";
    const lifeExp = stats?.life_expectancy || "72.6";
    const healthGDP = stats?.health_expenditure || "9.8%";

    // Calculated mock data derived from real pop for visual flair
    const birthsToday = Math.floor((stats?.population || 8280304948) * 0.00004).toLocaleString();

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
                    <span>Global Health Expenditure</span>
                    <span style={{ color: '#3b82f6' }}>Load: {loadValue}</span>
                </div>
                <div className={styles.expValue}>{healthGDP} <span style={{fontSize: '14px', opacity: 0.7}}>(of World GDP)</span></div>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: healthGDP }}
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
                        <span className={styles.statLabel}>Avg Life Expectancy</span>
                        <span className={styles.statValue} style={{ color: '#3b82f6' }}>
                            {lifeExp} Years
                        </span>
                    </div>
                </div>
                <div className={styles.gridCol}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>System Nodes</span>
                        <span className={styles.statValue}>
                            {telemetryData?.active_nodes || 0} Active
                        </span>
                    </div>
                    <div style={{ height: '20px' }}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Uplink Status</span>
                        <span className={styles.statValue} style={{ color: isOperational ? '#10b981' : '#ef4444' }}>
                            {isOperational ? 'STABLE' : 'ERROR'}
                        </span>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <span>Source: {stats?.source || "World Bank API"}</span>
                <span>ID: {telemetryData?.status === 'OPERATIONAL' ? 'SECURE-LINK' : 'OFFLINE'}</span>
            </footer>
        </div>
    );
};

export default HealthCard;