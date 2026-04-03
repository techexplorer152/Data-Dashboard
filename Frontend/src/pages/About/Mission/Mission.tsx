import styles from './Mission.module.css';

function Mission() {
    return (
        <section className={styles.mission_container}>
            <div className={styles.content_wrapper}>

               
                <div className={styles.objective_block}>
                    <label className={styles.system_label}>[CORE_MISSION_v1.0]</label>
                    <h2 className={styles.title}>Visualizing the Invisible</h2>
                    <p className={styles.description}>

                    </p>
                </div>


                <div className={styles.goals_grid}>
                    <div className={styles.goal_card}>
                        <div className={styles.card_id}>01</div>
                        <h3>DATA_SENSING</h3>
                    </div>
                    <div className={styles.goal_card}>
                        <div className={styles.card_id}>02</div>
                        <h3>NEURAL_MAPPING</h3>
                    </div>
                    <div className={styles.goal_card}>
                        <div className={styles.card_id}>03</div>
                        <h3>SYSTEM_LOGIC</h3>
                    </div>
                </div>

            </div>


            <div className={styles.scanline_overlay}></div>
        </section>
    );
}

export default Mission;