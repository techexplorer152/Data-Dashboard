import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import styles from "./HeroBackground.module.css";

export default function HeroBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const options: ISourceOptions = {
        fullScreen: { enable: false },
        background: { color: "#0d0d0d" },

        particles: {
            number: { value: 100 },
            color: { value: "#ca0707" },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } },
            move: { enable: true, speed: 1.5 },
            links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.3,
                width: 1
            }
        },

        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                repulse: { distance: 100 },
                push: { quantity: 4 }
            }
        }
    };

    return (
        <div className={styles.container}>
            <Particles id="tsparticles" init={particlesInit} options={options} />
        </div>
    );
}
