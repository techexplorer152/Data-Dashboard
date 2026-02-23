import * as THREE from "three"
import html2canvas from "html2canvas"
import { useRef, useEffect, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"

function Card({ globeRef }: { globeRef: React.MutableRefObject<THREE.Mesh> }) {
    const meshRef = useRef<THREE.Group>(null!)
    const [texture, setTexture] = useState<THREE.Texture | null>(null)
    const [isFocused, setIsFocused] = useState(false)

    // Access camera to ensure we face it perfectly when flat
    const { camera } = useThree()

    useEffect(() => {
        const captureTexture = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const element = document.getElementById("floating-card-render")
            if (element) {
                try {
                    const canvas = await html2canvas(element, {
                        backgroundColor: null,
                        scale: 2,
                        useCORS: true,
                        allowTaint: true
                    })
                    const tex = new THREE.CanvasTexture(canvas)
                    tex.anisotropy = 16
                    tex.colorSpace = THREE.SRGBColorSpace
                    tex.needsUpdate = true
                    setTexture(tex)
                } catch (error) { console.error(error) }
            }
        }
        captureTexture()
    }, [])

    useFrame(({ clock }, delta) => {
        if (!meshRef.current) return

        if (!isFocused) {
            // --- ORBITING LOGIC ---
            const elapsedTime = clock.getElapsedTime()
            const speed = 0.2
            const radius = 6

            const targetX = Math.cos(elapsedTime * speed) * radius
            const targetZ = Math.sin(elapsedTime * speed) * radius
            const targetY = Math.sin(elapsedTime * 0.5) * 0.3

            // Smoothly move back to orbit if coming from focused state
            meshRef.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1)

            // Look at center
            const lookAtPos = new THREE.Vector3(0, 0, 0)
            meshRef.current.lookAt(lookAtPos)
        } else {
            // --- FOCUSED (FLAT) LOGIC ---
            // Position the card directly in front of the camera
            // 0, 0, 5 is a good spot for a camera at 0, 0, 10
            const targetPos = new THREE.Vector3(0, 0, 5)
            meshRef.current.position.lerp(targetPos, 0.1)

            // Reset rotation to face camera (flat)
            meshRef.current.quaternion.slerp(camera.quaternion, 0.1)
        }
    })

    if (!texture) return null

    return (
        <group
            ref={meshRef}
            onClick={(e) => {
                e.stopPropagation() // Prevent clicking through to the globe
                setIsFocused(!isFocused)
            }}
            onPointerOver={() => (document.body.style.cursor = 'pointer')}
            onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
            {/* Front Side */}
            <mesh>
                <planeGeometry args={[4.5, 2.5]} />
                <meshStandardMaterial map={texture} transparent side={THREE.FrontSide} />
            </mesh>

            {/* Back Side */}
            <mesh rotation={[0, Math.PI, 0]}>
                <planeGeometry args={[4.5, 2.5]} />
                <meshStandardMaterial map={texture} transparent side={THREE.FrontSide} />
            </mesh>
        </group>
    )
}

export default Card