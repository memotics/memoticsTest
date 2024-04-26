import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from 'three'

const ArrowPointer = ({srcDir = ""}) => {
    const model = useGLTF(srcDir);
    const animation = useAnimations(model.animations, model.scene);
    return (
        <primitive object={model.scene}>
            <meshBasicMaterial color={"white"} emissive={"red"} emissiveIntensity={5} side={THREE.DoubleSide} ></meshBasicMaterial>
        </primitive>
    );
}

export default ArrowPointer;