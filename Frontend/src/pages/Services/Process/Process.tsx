import styles from './Process.module.css';

const Process = () => {
    const steps = [
        { id: '01', title: 'SYSTEM_AUDIT', desc: 'Deep dive into project requirements, user personas, and technical constraints.' },
        { id: '02', title: 'ARCHITECTURE_BUILD', desc: 'Constructing the structural logic, API schemas, and state management systems.' },
        { id: '03', title: 'VISUAL_SYNTHESIS', desc: 'Applying the HUD-style UI, 3D elements, and interactive micro-animations.' },
        { id: '04', title: 'UPLINK_DEPLOY', desc: 'Final optimization, SEO indexing, and global server distribution.' }
    ];

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <label>[LIFECYCLE_PROTOCOL]</label>
                <h2>Workflow_Sequence</h2>
            </div>

            <div className={styles.pipeline}>
                {steps.map((step, index) => (
                    <div key={step.id} className={styles.step_node}>
                        <div className={styles.line_container}>
                            <div className={styles.circle}>
                                <div className={styles.inner_dot}></div>
                            </div>
                            {index !== steps.length - 1 && <div className={styles.connector}></div>}
                        </div>

                        <div className={styles.content}>
                            <span className={styles.step_id}>{step.id}</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;