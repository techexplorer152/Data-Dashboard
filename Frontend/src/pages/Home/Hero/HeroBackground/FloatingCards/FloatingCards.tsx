import styles from "./FloatingCards.module.css"
import * as THREE from "three"
import testcard from "./img/img.png"
import html2canvas from "html2canvas"
import { useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"

function Cards({ globeRef }: { globeRef: React.MutableRefObject<THREE.Mesh> }) {
    const groupRef = useRef<THREE.Group>(null!)
    const meshRef = useRef<THREE.Mesh>(null!)
    const [texture, setTexture] = useState<THREE.Texture | null>(null)


    useEffect(() => {
        const hiddenDiv = document.createElement("div")
        hiddenDiv.style.position = "absolute"
        hiddenDiv.style.top = "-9999px"
        hiddenDiv.style.width = "500px"
        document.body.appendChild(hiddenDiv)

        hiddenDiv.innerHTML = `
  <div class="${styles.container}">
    <h3>hi</h3>
    <p>This is a card!</p>
    <img src="${testcard}" alt="icon" />
  </div>
    `

        html2canvas(hiddenDiv).then((canvas) => {
            const tex = new THREE.CanvasTexture(canvas)
            tex.needsUpdate = true
            tex.colorSpace = THREE.SRGBColorSpace
            setTexture(tex)
            document.body.removeChild(hiddenDiv)
        })
    }, [])


    useFrame(({ clock }) => {
        if (!groupRef.current || !meshRef.current) return
        const elapsedTime = clock.getElapsedTime()
        const speed = 0.5
        groupRef.current.rotation.y = elapsedTime * speed
        meshRef.current.lookAt(0, 0, 0)
    })


    if (!texture) return null
    return (
        <group ref={groupRef}>
            <mesh ref={meshRef} position={[7, 0, 0]}>
                <planeGeometry args={[3, 2]} />
                <meshBasicMaterial map={texture} transparent />
            </mesh>
        </group>
    )
}

export default Cards