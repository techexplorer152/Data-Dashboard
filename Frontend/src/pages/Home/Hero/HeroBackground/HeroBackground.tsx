import { Edges } from "@react-three/drei"
import styles from './HeroBackground.module.css'
import { Canvas, useFrame,useLoader } from "@react-three/fiber"
import {useEffect, useRef, useState} from "react"
import * as THREE from "three"
import { OrbitControls, Stars } from "@react-three/drei"
import EarthImg from './Globe/img/earth2.jpg'
import Globe from './Globe/Globe'
import { Suspense } from "react"



function HeroBackground() {
    return (
        <div className={styles.container}>

            <div className={styles.canvasWrapper}>
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={1.5} />
                    <pointLight position={[10, 10, 10]} />

                    <Suspense fallback={null}>
                        <Globe />
                    </Suspense>

                    <OrbitControls
                        rotateSpeed={0.4}
                        enablePan={false}
                        enableZoom={true}
                        minDistance={5}
                        maxDistance={15}
                        autoRotate={false}
                    />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>


            <div className={styles.uiOverlay}>
                <header className={styles.header}>
                    <h1>NETWORK<span>_CORE</span></h1>
                    <div className={styles.statusBadge}>SYSTEM ONLINE</div>
                </header>

                <main className={styles.mainContent}>

                    <div className={styles.glassCard}>
                        <h3>Global Traffic</h3>
                        <p>Real-time data stream active...</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default HeroBackground