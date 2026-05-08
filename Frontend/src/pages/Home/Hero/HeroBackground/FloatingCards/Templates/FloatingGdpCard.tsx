import React, { useEffect, useState } from "react";
import styles from "./FloatingCardTemplate.module.css";
import UsaFlag from './img/us.png';
import AlbaniaFlag from './img/al.jpg';
import KosovoFlag from './img/xk.png';
import JapanFlag from './img/jp.png';
import ChinaFlag from './img/cn.png';
import GermanyFlag from './img/de.png';
import UnFlag from './img/un.png';

interface StatRowProps {
    img?: string;
    val1: string;
    val2: string;
}

interface CountryGdp {
    name: string;
    code: string;
    flag: string;
    gdp: string;
    growth: string;
}

const COUNTRIES = [
    { name: "USA", code: "USA", flag: UsaFlag },
    { name: "Germany", code: "DEU", flag: GermanyFlag },
    { name: "Japan", code: "JPN", flag: JapanFlag },
    { name: "China", code: "CHN", flag: ChinaFlag },
    { name: "Albania", code: "ALB", flag: AlbaniaFlag },
    { name: "Kosovo", code: "XKX", flag: KosovoFlag },
];

const StatRow = ({ img, val1, val2 }: StatRowProps) => (
    <div className={styles.row}>
        <div className={styles.iconContainer}>
            <img src={img} alt="flag" className={styles.flagImg} />
        </div>
        <span className={styles.valuePrimary}>{val1}</span>
        <div className={styles.verticalLine}></div>
        <span className={styles.valueSecondary}>{val2}</span>
    </div>
);

const FloatingGdpCard = () => {
    const [stats, setStats] = useState<CountryGdp[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGdpData = async () => {
            try {
                const results = await Promise.all(
                    COUNTRIES.map(async (country) => {
                        // NY.GDP.MKTP.CD is the indicator for GDP in current USD
                        const response = await fetch(
                            `https://api.worldbank.org/v2/country/${country.code}/indicator/NY.GDP.MKTP.CD?format=json&per_page=2`
                        );
                        const json = await response.json();

                        // json[1] is the data array. [0] is latest year, [1] is previous year.
                        const latest = json[1][0];
                        const previous = json[1][1];

                        const gdpTrillions = (latest.value / 1_000_000_000_000).toFixed(2) + "T";
                        const growth = (((latest.value - previous.value) / previous.value) * 100).toFixed(1) + "%";

                        return {
                            ...country,
                            gdp: gdpTrillions,
                            growth: growth
                        };
                    })
                );
                setStats(results);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch GDP:", err);
            }
        };

        fetchGdpData();
    }, []);

    return (
        <div id="floating-card-render" className={styles.cardContainer}>
            <h2 className={styles.title}>Global Economic Intelligence</h2>
            <hr className={styles.divider} />

            <div className={styles.content}>
                <div className={styles.chartSection}>
                    <div className={styles.legend}>
                        <div className={styles.legendItem}>
                            <span className={`${styles.dot} ${styles.bgSeries1}`}></span>
                            <span>GDP Growth</span>
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
                            stroke="#00ff88"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <polyline points="0,95 50,85 100,50 150,70 200,20" fill="none" stroke="#46a3b1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <div className={styles.xAxis}>
                        <span>2020</span>
                        <span>2021</span>
                        <span>2022</span>
                        <span>2023</span>
                        <span>2024</span>
                        <span>LIVE</span>
                    </div>
                </div>

                <div className={styles.statsSection}>
                    <StatRow img={UnFlag} val1="WORLD BANK DATA" val2="EST." />

                    {loading ? (
                        <div style={{ color: '#fff', padding: '10px' }}>Loading Real-Time Data...</div>
                    ) : (
                        stats.map((country) => (
                            <StatRow
                                key={country.code}
                                img={country.flag}
                                val1={country.gdp}
                                val2={country.growth}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FloatingGdpCard;
