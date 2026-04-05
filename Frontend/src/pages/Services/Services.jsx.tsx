import styles from './Services.module.css';

const Services = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <label className={styles.system_label}>[SYSTEM_CAPABILITIES_v3.0]</label>
                <h1 className={styles.main_title}>Service<span>_Modules</span></h1>
            </header>

            <div className={styles.grid}>

                <div className={`${styles.node} ${styles.featured}`}>
                    <div className={styles.node_header}>
                        <span className={styles.node_id}>01</span>
                        <div className={styles.status_pulse}></div>
                    </div>
                    <h2>IMMERSIVE_INTERFACES</h2>
                    <p>Building high-performance 3D environments and WebGL experiences using Three.js and React Three Fiber.</p>
                    <div className={styles.tech_tags}>
                        <span>THREE.JS</span>
                        <span>R3F</span>
                        <span>SHADERS</span>
                    </div>
                </div>


                <div className={styles.node}>
                    <div className={styles.node_header}>
                        <span className={styles.node_id}>02</span>
                    </div>
                    <h2>DATA_DASHBOARDS</h2>
                    <p>Real-time telemetry and financial visualization tools with complex API integrations.</p>
                </div>


                <div className={styles.node}>
                    <div className={styles.node_header}>
                        <span className={styles.node_id}>03</span>
                    </div>
                    <h2>REACT_ARCHITECTURE</h2>
                    <p>Scalable, type-safe web applications built on React 19 and modern state management.</p>
                </div>


                <div className={`${styles.node} ${styles.wide}`}>
                    <div className={styles.node_header}>
                        <span className={styles.node_id}>04</span>
                        <span className={styles.terminal_tag}>STABLE_BUILD</span>
                    </div>
                    <h2>SYSTEM_OPTIMIZATION</h2>
                    <p>Core performance auditing, SEO infrastructure, and ultra-fast load times for enterprise-grade business nodes.</p>
                </div>
            </div>


            <div className={styles.grid_bg}></div>
        </div>
    );
};

export default Services;