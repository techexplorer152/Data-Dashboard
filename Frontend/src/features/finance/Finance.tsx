import { useFetch } from '../../hooks/useFetch';
import styles from './News.module.css';

interface TelemetryData {
    timestamp: string;
    status: string;
    market_trend: string;
    active_nodes: number;
    system_load: string;
}

const News = () => {
    const { data, loading, error } = useFetch<TelemetryData>('http://localhost:5000/api/system-telemetry');

    if (error) return <div className={styles.error}>[UPLINK_OFFLINE]: {error}</div>;

    const telemetry = data || {
        status: "OFFLINE",
        system_load: "0.0%",
        active_nodes: 0
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.pulse}></span> SYSTEM_DIAGNOSTICS_v1.0
            </div>

            {loading ? (
                <div className={styles.scanner}>SCANNING_NETWORK...</div>
            ) : (
                <div className={styles.stats}>
                    <div className={styles.data_point}>
                        <label>STATUS</label>
                        <span className={telemetry.status === "ONLINE" ? styles.online : styles.offline}>
                            {telemetry.status}
                        </span>
                    </div>
                    <div className={styles.data_point}>
                        <label>LOAD</label>
                        <span>{telemetry.system_load}</span>
                    </div>
                    <div className={styles.data_point}>
                        <label>ACTIVE_NODES</label>
                        <span>{telemetry.active_nodes}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default News;