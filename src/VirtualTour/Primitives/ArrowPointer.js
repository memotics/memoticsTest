import { useGLTF } from "@react-three/drei";

const ArrowPointer = () => {
    const model = useGLTF("./Models/glowing arrows.glb");
    return (
        <primitive object={model.scene}>
            <meshBasicMaterial color={"white"} emissive={"red"} emissiveIntensity={5}></meshBasicMaterial>
        </primitive>
    );
}

export default ArrowPointer;