import styles from "./try.module.css";

function Try(){
    return (
        <div className={styles.container}>
            <h1>World Economic Growth (1960 – NOW)</h1>
            <div className={styles.content}>
                <div className={styles.graph}>

                </div>
                <div className={styles.data}>
                    <div className={styles.GDP}>

                    </div>
                    <div className={styles.GDPperCapita}></div>
                </div>
            </div>


        </div>
    )
}

export default Try