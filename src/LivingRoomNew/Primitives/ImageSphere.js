import { useTexture } from "@react-three/drei";
import * as THREE from 'three';

const ImageSphere = () => {
    
    const scalenum = 10;
    const Texture = useTexture("./Textures/LivingRoom.png");
    return (
        <>
            <mesh scale={[scalenum,scalenum,scalenum]}>
                <sphereGeometry></sphereGeometry>
                <meshBasicMaterial map={Texture} side={THREE.DoubleSide}></meshBasicMaterial>
            </mesh>
        </>
    );
}

export default ImageSphere;