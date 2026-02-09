import { useState, useEffect } from "react";
import styles from "./Home.module.css";

const PercentageCircle = ({ percentage }: { percentage: number }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className={styles.circleWrapper}>
            <svg width="100" height="100" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    className="text-white/10"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="text-green-400 transition-all duration-1000"
                />
            </svg>
            <span className={styles.percentageText}>{percentage}%</span>
        </div>
    );
};

function Home() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.heroText}>
                <h1>Stay informed with Data-Dashboard</h1>
                <p>
                    Look at real time data to and set
                    notifications to remind you of big news
                </p>
            </div>

            <div className={styles.card1}>
                <div className={styles.cardHeader}>
                    <span>LOCAL TIME</span>
                    <div className={styles.statusDot} />
                </div>
                <div className={styles.timeValue}>
                    {time.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </div>
                <div className={styles.dateValue}>
                    {time.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>

            <div className={styles.card2}>
                <span className={styles.label}>MONTHLY TARGET</span>
                <PercentageCircle percentage={75} />
            </div>

            <div className={styles.card3}>
                <span className={styles.label}>LIVE NOTIFICATIONS</span>
                <div className={styles.notificationFeed}>
                    <div className={styles.notificationItem}>
                        <span className={styles.notifStatus}>SUCCESS</span>
                        <p>API Handshake established</p>
                    </div>
                    <div className={styles.notificationItem}>
                        <span className={styles.notifStatus}>INFO</span>
                        <p>Inbound cashflow detected: $1,200</p>
                    </div>
                    <div className={styles.notificationItem}>
                        <span className={styles.notifStatus}>INFO</span>
                        <p>Global node synced</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;