import { Edges } from "@react-three/drei"
import styles from './HeroBackground.module.css'
import { Canvas, useFrame,useLoader } from "@react-three/fiber"
import {useEffect, useRef, useState} from "react"
import * as THREE from "three"
import { OrbitControls, Stars } from "@react-three/drei"
import EarthImg from './Globe/img/earth2.jpg'
import Globe from './Globe/Globe'



function HeroBackground() {
    return (
        <div className={styles.container}>
            <Globe/>

        </div>
    )
}

export default HeroBackground