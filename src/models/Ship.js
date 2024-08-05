import React, { useEffect, useRef } from "react";
import shipScene from "../assets/3d/scene.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
const Ship = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(shipScene);
    const { actions } = useAnimations(animations, ref);
    useEffect(() => {
        if (isRotating) {
            actions["h��lice|h��liceAction.003"].play();
            actions["grande aile|grande aileAction.001"].play();
            actions["petite aile|grande aileAction.001"].play();
            actions["drapeau|grande aileAction.001"].play();
        } else {
            actions["h��lice|h��liceAction.003"].stop();
            actions["grande aile|grande aileAction.001"].stop();
            actions["petite aile|grande aileAction.001"].stop();
            actions["drapeau|grande aileAction.001"].stop();
        }
    });
    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
};
export default Ship;
