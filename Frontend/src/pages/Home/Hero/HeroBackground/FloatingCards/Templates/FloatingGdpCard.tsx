import { useEffect, useState } from "react";
import styles from "./FloatingCardTemplate.module.css";
import UsaFlag from './img/us.png';
import JapanFlag from './img/jp.png';
import ChinaFlag from './img/cn.png';
import GermanyFlag from './img/de.png';
import UnFlag from './img/un.png';

interface StatRowProps {
    img?: string;
    val1: string;
    val2: string;
}

interface MarketAsset {
    name: string;
    id: string;
    flag: string;
    price: string;
    change24h: string;
}

const ASSETS = [
    { name: "Bitcoin (BTC)", id: "bitcoin", flag: UsaFlag },
    { name: "Ethereum (ETH)", id: "ethereum", flag: GermanyFlag },
    { name: "Solana (SOL)", id: "solana", flag: JapanFlag },
    { name: "Binance Coin", id: "binancecoin", flag: ChinaFlag },
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
    const [stats, setStats] = useState<MarketAsset[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const res = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin&vs_currencies=usd&include_24hr_change=true"
                );
                const data = await res.json();

                const results = ASSETS.map((asset) => {
                    const assetData = data[asset.id];
                    if (assetData) {
                        const price = assetData.usd;
                        const change = assetData.usd_24h_change;

                        return {
                            ...asset,
                            price: price >= 1000
                                ? `$${(price).toLocaleString(undefined, {maximumFractionDigits: 0})}`
                                : `$${price.toFixed(2)}`,
                            change24h: (change >= 0 ? "+" : "") + change.toFixed(2) + "%"
                        };
                    }
                    return { ...asset, price: "Updating...", change24h: "0.0%" };
                });

                setStats(results);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setStats(ASSETS.map(a => ({ ...a, price: "$64,250", change24h: "+1.8%" })));
                setLoading(false);
            }
        };

        fetchMarketData();
        const interval = setInterval(fetchMarketData, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="floating-card-render" className={styles.cardContainer}>
            <h2 className={styles.title}>Global Market Intelligence</h2>
            <hr className={styles.divider} />
            <div className={styles.content}>
                <div className={styles.chartSection}>
                    <div className={styles.legend}>
                        <div className={styles.legendItem}><span className={`${styles.dot} ${styles.bgSeries1}`}></span><span>Asset Flow</span></div>
                        <div className={styles.legendItem}><span className={`${styles.dot} ${styles.bgSeries2}`}></span><span>Volatility</span></div>
                    </div>
                    <svg viewBox="0 0 200 100" className={styles.svgChart} preserveAspectRatio="none">
                        <line x1="0" y1="20" x2="200" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                        <line x1="0" y1="50" x2="200" y2="50" stroke="#f1f5f9" strokeWidth="0.5" />
                        <line x1="0" y1="80" x2="200" y2="80" stroke="#f1f5f9" strokeWidth="0.5" />
                        <polyline points="0,80 50,60 100,75 150,40 200,35" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="0,95 50,85 100,50 150,70 200,20" fill="none" stroke="#46a3b1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className={styles.xAxis}><span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>LIVE</span></div>
                </div>
                <div className={styles.statsSection}>
                    <StatRow img={UnFlag} val1="REALTIME INDEX" val2="24H" />
                    {loading ? (
                        <div style={{ color: '#fff', padding: '10px', fontSize: '0.8rem' }}>Syncing Live Feeds...</div>
                    ) : (
                        stats.map((asset) => (
                            <StatRow key={asset.id} img={asset.flag} val1={asset.price} val2={asset.change24h} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FloatingGdpCard;