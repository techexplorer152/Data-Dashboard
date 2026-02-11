import { Edges } from "@react-three/drei"
import styles from './Globe.module.css'
import { Canvas, useFrame,useLoader } from "@react-three/fiber"
import {useEffect, useRef, useState} from "react"
import * as THREE from "three"
import { OrbitControls, Stars } from "@react-three/drei"
import EarthImg from './img/earth2.jpg'

function Globe() {
    const ref = useRef()
    const timeoutRef = useRef(null)
    const [isRotating, setIsRotating] = useState(true)

    const texture = useLoader(THREE.TextureLoader, EarthImg)

    useFrame(() => {
        if (ref.current && isRotating) {
            ref.current.rotation.y += 0.004
        }
    })

    return (
        <mesh
            ref={ref}
            rotation={[0.4, 4.5, 0]}
            onPointerDown={(e) => {
                e.stopPropagation()

                setIsRotating(false)

                if (timeoutRef.current) clearTimeout(timeoutRef.current)
            }}
            onPointerUp={(e) => {
                e.stopPropagation()
                timeoutRef.current = setTimeout(() => {
                    setIsRotating(true)
                }, 10000)
            }}
            onPointerOut={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current)
                timeoutRef.current = setTimeout(() => {
                    setIsRotating(true)
                }, 6000)
            }}

        >

            <sphereGeometry args={[2.4, 64, 64]} />
            <meshStandardMaterial map={texture} />

        </mesh>
    )
}

function HeroGlobe() {


    return (
        <div className={styles.container}>
            <Canvas>


                <ambientLight intensity={1.9} />
                <Globe/>
                <OrbitControls
                    minDistance={3}
                    maxDistance={9}
                    rotateSpeed={0.4}
                    enablePan={false}
                    enableZoom={true}
                    autoRotate={false}
                />


            </Canvas>
        </div>
    )
}

export default HeroGlobe