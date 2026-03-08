import React from 'react';
import styles from "./SportsCard.module.css";
import GermanyFlag from './img/de.png';
import ItalyFlag from './img/it.png';

interface MatchDetailProps {
    label: string;
    value: string;
}

const MatchDetail = ({ label, value }: MatchDetailProps) => (
    <div className={styles.detailRow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
    </div>
);

const SportsCard = () => {
    const matchData = {
        matchday: 3,
        league: "UEFA Nations League",
        homeTeam: { name: "Germany", flag: GermanyFlag },
        awayTeam: { name: "Italy", flag: ItalyFlag },
        score: "1 : 1",
        date: "22 Mar 2026",
        venue: "Allianz Arena",
        kickoff: "20:45",
        status: "Finished"
    };

    return (
        <div id="sports-card-render" className={styles.cardContainer}>
            <header className={styles.header}>
                <span className={styles.leagueBadge}>{matchData.league}</span>
                <h2 className={styles.matchdayTitle}>Matchday {matchData.matchday}</h2>
            </header>

            <div className={styles.matchupSection}>
                <div className={styles.teamSide}>
                    <div className={styles.flagWrapper}>
                        <img src={matchData.homeTeam.flag} alt={`${matchData.homeTeam.name} Flag`} className={styles.teamFlag} />
                    </div>
                    <span className={styles.teamName}>{matchData.homeTeam.name}</span>
                </div>

                <div className={styles.scoreContainer}>
                    <div className={styles.scoreDisplay}>1:1</div>
                    <div className={styles.statusBadge}>{matchData.status}</div>
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
                    <MatchDetail label="Date" value={matchData.date} />
                    <MatchDetail label="Kickoff" value={matchData.kickoff} />
                </div>
                <div className={styles.infoBlock}>
                    <MatchDetail label="Venue" value={matchData.venue} />
                    <MatchDetail label="Match ID" value="UNL-2026-042" />
                </div>
            </div>
        </div>
    );
};

export default SportsCard;