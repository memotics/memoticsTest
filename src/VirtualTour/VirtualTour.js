import { Canvas } from "@react-three/fiber";
import React from 'react';
import VideoScene from "./VideoScene";

const VirtualTour = () => {
    return (
        <>
                <Canvas
                    camera={{
                        position: [2,3,-2],
                        fov: 60,
                        near: 0.1,
                        far: 100,
                        zoom: 0.7,
                    }}>
                    <VideoScene></VideoScene>
                </Canvas>
                
        </>
    );
}

export default VirtualTour;