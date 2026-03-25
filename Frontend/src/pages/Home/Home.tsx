import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Hero from './Hero/Hero'






function Home() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (

        <div>
            <Hero/>
            <div className={styles.container}>


                <div className={styles.heroText}>
                    <h1>Dashboard Overview</h1>
                    <p>
                        Real-time data aggregation. Monitor cashflow,
                        targets, and system notifications in one view.
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
                        {time.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
                    </div>
                </div>

                <div className={styles.card2}>
                    <span className={styles.label}>MONTHLY TARGET</span>

                </div>

                <div className={styles.card3}>
                    <div className={styles.cardHeader}>
                        <span>LIVE FEED</span>
                    </div>
                    <div className={styles.notificationFeed}>
                        <div className={styles.notificationItem}>
                            <span className={styles.notifStatus} data-type="SUCCESS">SUCCESS</span>
                            <p>API Handshake established</p>
                        </div>
                        <div className={styles.notificationItem}>
                            <span className={styles.notifStatus} data-type="INFO">INFO</span>
                            <p>Inbound cashflow: $1,200</p>
                        </div>
                        <div className={styles.notificationItem}>
                            <span className={styles.notifStatus} data-type="INFO">INFO</span>
                            <p>Global node synced</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;