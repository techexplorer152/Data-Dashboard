import styles from './Globe.module.css'
import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState, forwardRef, useImperativeHandle } from "react"
import * as THREE from "three"
import EarthImg from './img/earth2.jpg'

const Globe = forwardRef((props, forwardedRef) => {
    const localRef = useRef<THREE.Mesh>(null!)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [isRotating, setIsRotating] = useState(true)

    const texture = useLoader(THREE.TextureLoader, EarthImg)

    useImperativeHandle(forwardedRef, () => localRef.current)

    useFrame(() => {
        if (localRef.current && isRotating) {
            localRef.current.rotation.y += 0.008
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
            ref={localRef}
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
                    startTimer(3000)
                }
            }}
            onPointerOut={() => startTimer(3000)}
        >
            <sphereGeometry args={[2.4, 64, 64]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
})

export default Globe
