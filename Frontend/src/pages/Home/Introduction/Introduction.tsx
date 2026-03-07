import React from 'react';
import styles from './Introduction.module.css';

const Introduction: React.FC = () => {
    return (
        <section className={styles.introContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.leftCol}>
                    <h2 className={styles.title}>
                        Navigating the <span className={styles.gradientText}>Global Economy</span> with Precision.
                    </h2>
                </div>
                <div className={styles.rightCol}>
                    <p className={styles.description}>
                        Since 1960, the world has witnessed unprecedented shifts in economic power and growth.
                        Our platform translates decades of complex fiscal data into actionable visual insights.
                    </p>
                    <p className={styles.description}>
                        We provide the tools to track emerging markets, analyze historical trends, and
                        forecast future growth through a lens of clarity and technical excellence.
                    </p>
                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>60+</span>
                            <span className={styles.statLabel}>Years of Data</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>190+</span>
                            <span className={styles.statLabel}>Countries</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;