import styles from "./FloatingCardTemplate.module.css";
import UsaFlag from './img/us.png';
import AlbaniaFlag from './img/al.jpg';
import KosovoFlag from './img/xk.png';
import JapanFlag from './img/jp.png';
import ChinaFlag from './img/cn.png';
import GermanyFlag from './img/de.png';
import UnFlag from './img/un.png';

interface StatRowProps {
    icon?: string;
    img?: string;
    val1: string;
    val2: string;
}

interface FloatingCardProps {
    telemetryData?: {
        market_trend: string;
        active_nodes: number;
        status: string;
    };
}

const StatRow = ({ icon, img, val1, val2 }: StatRowProps) => (
    <div className={styles.row}>
        <div className={styles.iconContainer}>
            {img ? <img src={img} alt="flag" className={styles.flagImg} /> : <span className={styles.icon}>{icon}</span>}
        </div>
        <span className={styles.valuePrimary}>{val1}</span>
        <div className={styles.verticalLine}></div>
        <span className={styles.valueSecondary}>{val2}</span>
    </div>
);

const FloatingCardTemplate = ({ telemetryData }: FloatingCardProps) => {
    const trend = telemetryData?.market_trend || "0.00%";
    const nodes = telemetryData?.active_nodes?.toLocaleString() || "---";
    const isPositive = !trend.startsWith('-');

    return (
        <div id="floating-card-render" className={styles.cardContainer}>
            <h2 className={styles.title}>System Intelligence Hub</h2>
            <hr className={styles.divider} />

            <div className={styles.content}>
                <div className={styles.chartSection}>
                    <div className={styles.legend}>
                        <div className={styles.legendItem}>
                            <span className={`${styles.dot} ${styles.bgSeries1}`}></span>
                            <span>Live Nodes</span>
                        </div>
                        <div className={styles.legendItem}>
                            <span className={`${styles.dot} ${styles.bgSeries2}`}></span>
                            <span>Market Flow</span>
                        </div>
                    </div>

                    <svg viewBox="0 0 200 100" className={styles.svgChart} preserveAspectRatio="none">
                        <line x1="0" y1="20" x2="200" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                        <line x1="0" y1="50" x2="200" y2="50" stroke="#f1f5f9" strokeWidth="0.5" />
                        <line x1="0" y1="80" x2="200" y2="80" stroke="#f1f5f9" strokeWidth="0.5" />

                        <polyline
                            points="0,80 50,60 100,75 150,40 200,35"
                            fill="none"
                            stroke={isPositive ? "#00ff88" : "#ff4d4d"}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <polyline points="0,95 50,85 100,50 150,70 200,20" fill="none" stroke="#46a3b1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <div className={styles.xAxis}>
                        <span>1960</span>
                        <span>1980</span>
                        <span>2000</span>
                        <span>2010</span>
                        <span>2020</span>
                        <span>NOW</span>
                    </div>
                </div>

                <div className={styles.statsSection}>
                    <StatRow img={UnFlag} val1={`NODES: ${nodes}`} val2={trend} />
                    <StatRow img={UsaFlag} val1="25,000,000" val2="2.1%" />
                    <StatRow img={GermanyFlag} val1="4,000,000" val2="1.5%" />
                    <StatRow img={JapanFlag} val1="5,000,000" val2="0.5%" />
                    <StatRow img={ChinaFlag} val1="18,000,000" val2="5.2%" />
                    <StatRow img={AlbaniaFlag} val1="18,000" val2="3.1%" />
                    <StatRow img={KosovoFlag} val1="9,000" val2="3.5%" />
                </div>
            </div>
        </div>
    );
};

export default FloatingCardTemplate;