import * as THREE from "three"
import html2canvas from "html2canvas"
import { useRef, useEffect, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"

interface CardProps {
    globeRef: React.MutableRefObject<THREE.Mesh>
    templateId: string
    radius: number
    speed: number
    phaseOffset: number
}

function Card({ globeRef, templateId, radius, speed, phaseOffset }: CardProps) {
    const meshRef = useRef<THREE.Group>(null!)
    const [texture, setTexture] = useState<THREE.Texture | null>(null)
    const [isFocused, setIsFocused] = useState(false)
    const { camera } = useThree()

    useEffect(() => {
        const captureTexture = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const element = document.getElementById(templateId)
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
                } catch (error) {
                    console.error(error)
                }
            }
        }
        captureTexture()
    }, [templateId])

    useFrame(({ clock }) => {
        if (!meshRef.current) return

        if (!isFocused) {
            const elapsedTime = clock.getElapsedTime()
            const angle = elapsedTime * speed + phaseOffset
            const targetX = Math.cos(angle) * radius
            const targetZ = Math.sin(angle) * radius
            const targetY = Math.sin(elapsedTime * 0.5) * 0.3

            meshRef.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1)
            meshRef.current.lookAt(new THREE.Vector3(0, 0, 0))
        } else {
            const targetPos = new THREE.Vector3(0, 0, 5)
            meshRef.current.position.lerp(targetPos, 0.1)
            meshRef.current.quaternion.slerp(camera.quaternion, 0.1)
        }
    })

    if (!texture) return null

    return (
        <group
            ref={meshRef}
            onClick={(e) => {
                e.stopPropagation()
                setIsFocused(!isFocused)
            }}
            onPointerOver={() => (document.body.style.cursor = 'pointer')}
            onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
            <mesh>
                <planeGeometry args={[4.5, 2.5]} />
                <meshStandardMaterial map={texture} transparent side={THREE.FrontSide} />
            </mesh>

            <mesh rotation={[0, Math.PI, 0]}>
                <planeGeometry args={[4.5, 2.5]} />
                <meshStandardMaterial map={texture} transparent side={THREE.FrontSide} />
            </mesh>
        </group>
    )
}

export default Card