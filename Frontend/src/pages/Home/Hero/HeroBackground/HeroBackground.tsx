import { useRef, Suspense } from "react";
import type { ReactNode } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Globe from './Globe/Globe';
import Card from './FloatingCards/FloatingCards';
import styles from './HeroBackground.module.css';

interface HeroBackgroundProps {
    children?: ReactNode;
}

const cardsConfig = [
    { id: "card-1", radius: 6, speed: 0.2, type: 'economy' },
    { id: "card-2", radius: 6, speed: 0.2, type: 'sports' },
    { id: "card-3", radius: 6, speed: 0.2, type: 'health' }
];

function HeroBackground({ children }: HeroBackgroundProps) {
    const globeRef = useRef<THREE.Mesh>(null!);

    return (
        <div className={styles.canvasWrapper} style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <Canvas
                style={{ width: "100%", height: "100%", position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                camera={{ position: [0, 0, 10], fov: 45 }}
            >
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} />

                <Suspense fallback={null}>
                    <Globe ref={globeRef} />

                    {cardsConfig.map((card, index) => (
                        <Card
                            key={card.id}
                            globeRef={globeRef}
                            templateId={card.id}
                            radius={card.radius}
                            speed={card.speed}
                            phaseOffset={(index / cardsConfig.length) * Math.PI * 2}
                        />
                    ))}
                </Suspense>

                <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>

            {children && (
                <div className={styles.cardsOverlay} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
                    <div style={{ pointerEvents: 'auto' }}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeroBackground;