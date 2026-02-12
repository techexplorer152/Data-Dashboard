import { Edges } from "@react-three/drei"
import styles from './Globe.module.css'
import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "@react-three/drei"
import EarthImg from './img/earth2.jpg'

function Globe() {
    const ref = useRef<THREE.Mesh>(null!)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [isRotating, setIsRotating] = useState(true)

    const texture = useLoader(THREE.TextureLoader, EarthImg)

    useFrame(() => {
        if (ref.current && isRotating) {
            ref.current.rotation.y += 0.004
        }
    })

    const startTimer = (ms: number) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setIsRotating(true)
        }, ms)
    }

    return (
        <mesh
            ref={ref}
            rotation={[0.4, 4.5, 0]}
            onPointerDown={(e) => {
                if (e.button === 0 && e.isPrimary) {
                    e.stopPropagation()
                    setIsRotating(false)
                    if (timeoutRef.current) clearTimeout(timeoutRef.current)
                }
            }}
            onPointerUp={(e) => {
                if (e.button === 0) {
                    e.stopPropagation()
                    startTimer(10000)
                }
            }}
            onPointerOut={() => startTimer(6000)}
        >
            <sphereGeometry args={[2.4, 64, 64]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}

export default Globe