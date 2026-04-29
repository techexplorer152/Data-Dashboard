import styles from "./SportsCard.module.css";
import GermanyFlag from './img/de.png';
import ItalyFlag from './img/it.png';

interface MatchDetailProps {
    label: string;
    value: string;
}

interface SportsCardProps {
    telemetryData?: {
        status: string;
        active_nodes: number;
        market_trend: string; // Used here for "Win Probability" shift
    };
}

const MatchDetail = ({ label, value }: MatchDetailProps) => (
    <div className={styles.detailRow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
    </div>
);

const SportsCard = ({ telemetryData }: SportsCardProps) => {
    const isLive = telemetryData?.status === 'OPERATIONAL';
    const viewers = telemetryData ? (telemetryData.active_nodes * 1250).toLocaleString() : "85,000";

    const matchData = {
        matchday: 3,
        league: "UEFA Nations League",
        homeTeam: { name: "Germany", flag: GermanyFlag },
        awayTeam: { name: "Italy", flag: ItalyFlag },
        score: "1 : 1",
        date: "22 Mar 2026",
        venue: "Allianz Arena",
        kickoff: "20:45",
        status: isLive ? "LIVE" : "Finished"
    };

    return (
        <div id="sports-card-render" className={styles.cardContainer}>
            <header className={styles.header}>
                <span className={styles.leagueBadge}>{matchData.league}</span>
                <div className={styles.liveIndicator}>
                    {isLive && <div className={styles.pulseDot}></div>}
                    <h2 className={styles.matchdayTitle}>Matchday {matchData.matchday}</h2>
                </div>
            </header>

            <div className={styles.matchupSection}>
                <div className={styles.teamSide}>
                    <div className={styles.flagWrapper}>
                        <img src={matchData.homeTeam.flag} alt={`${matchData.homeTeam.name} Flag`} className={styles.teamFlag} />
                    </div>
                    <span className={styles.teamName}>{matchData.homeTeam.name}</span>
                </div>

                <div className={styles.scoreContainer}>
                    <div className={styles.scoreDisplay}>{matchData.score}</div>
                    <div className={`${styles.statusBadge} ${isLive ? styles.liveActive : ''}`}>
                        {matchData.status}
                    </div>
                </div>

                <div className={styles.teamSide}>
                    <div className={styles.flagWrapper}>
                        <img src={matchData.awayTeam.flag} alt={`${matchData.awayTeam.name} Flag`} className={styles.teamFlag} />
                    </div>
                    <span className={styles.teamName}>{matchData.awayTeam.name}</span>
                </div>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                    <MatchDetail label="Global Viewers" value={viewers} />
                    <MatchDetail label="Stream Signal" value={isLive ? "Encrypted" : "Archive"} />
                </div>
                <div className={styles.infoBlock}>
                    <MatchDetail label="Venue" value={matchData.venue} />
                    <MatchDetail label="Uplink ID" value={`SAT-${telemetryData?.active_nodes || '000'}`} />
                </div>
            </div>
        </div>
    );
};

export default SportsCard;