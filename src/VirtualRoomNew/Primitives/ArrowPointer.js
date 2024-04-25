import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

const ArrowPointer = ({srcDir = ""}) => {
    const model = useGLTF(srcDir);
    return (
        <primitive object={model.scene}>
            <meshBasicMaterial color={"white"} emissive={"red"} emissiveIntensity={5} side={THREE.DoubleSide} ></meshBasicMaterial>
        </primitive>
    );
}

export default ArrowPointer;