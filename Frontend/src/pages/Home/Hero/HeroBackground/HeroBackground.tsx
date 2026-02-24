import { Edges } from "@react-three/drei"
import styles from './HeroBackground.module.css'
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { OrbitControls, Stars } from "@react-three/drei"
import Globe from './Globe/Globe'
import { Suspense } from "react"
import Card from './FloatingCards/FloatingCards'
import FloatingCardTemplate from './FloatingCards/Templates/FloatingCardTemplate'

function HeroBackground() {
    const globeRef = useRef<THREE.Mesh>(null!)

    const cards = [
        { id: "card-1", radius: 6, speed: 0.2 },
        { id: "card-2", radius: 6, speed: 0.2 },
        { id: "card-3", radius: 6, speed: 0.2 }
    ]

    return (
        <div className={styles.container}>

            {/* Hidden templates: one per card */}
            {cards.map(card => (
                <div
                    key={card.id}
                    id={card.id}
                    style={{ position: "absolute", top: "-10000px", left: "-10000px", pointerEvents: "none" }}
                >
                    <FloatingCardTemplate />
                </div>
            ))}

            <div className={styles.canvasWrapper}>
                <Canvas
                    style={{ width: "100%", height: "100%" }}
                    camera={{ position: [0, 0, 10], fov: 45 }}
                >
                    <ambientLight intensity={1.5} />
                    <pointLight position={[10, 10, 10]} />

                    <Suspense fallback={null}>
                        <Globe ref={globeRef} />

                        {cards.map((card, index) => (
                            <Card
                                key={card.id}
                                globeRef={globeRef}
                                templateId={card.id}
                                radius={card.radius}
                                speed={card.speed}
                                phaseOffset={(index / cards.length) * Math.PI * 2}
                            />
                        ))}
                    </Suspense>

                    <OrbitControls
                        rotateSpeed={0.4}
                        enablePan={false}
                        enableRotate={false}
                        enableZoom={false}
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