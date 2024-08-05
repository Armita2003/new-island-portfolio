import React, { useEffect, useRef, useState } from "react";
import dragonScene from "../assets/3d/dragon_flying_cycle.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const Dragon = ({ ...props }) => {
    const { scene, animations } = useGLTF(dragonScene);
    const dragonRef = useRef();
    const { actions } = useAnimations(animations, dragonRef);
    const [direction, setDirection] = useState(1);
    useEffect(() => {
        actions["Take 001"].play();
    }, []);
    useFrame(({ clock, camera }) => {
        dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
        if (dragonRef.current.position.x > camera.position.x + 8) {
            dragonRef.current.rotation.y = -20;
        } else if (dragonRef.current.position.x < camera.position.x - 9) {
            dragonRef.current.rotation.y = 15;
        }

        if (dragonRef.current.rotation.y === 15) {
            dragonRef.current.position.x += 0.02;
            dragonRef.current.position.z -= 0.01;
        } else {
            dragonRef.current.position.x -= 0.02;
            dragonRef.current.position.z += 0.01;
        }
    });

    const adjustDragonForScreenSize = () => {
        let screenScale = null;

        if (window.innerWidth < 768) {
            screenScale = [1, 1, 1];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale];
    };
    const [screenScale] = adjustDragonForScreenSize();

    return (
        <mesh
            {...props}
            position={[-9, 2, 1]}
            scale={screenScale}
            ref={dragonRef}
        >
            <primitive object={scene} />
        </mesh>
    );
};

export default Dragon;
