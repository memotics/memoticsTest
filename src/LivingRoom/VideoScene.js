import * as THREE from 'three';
import { OrbitControls, useTexture} from "@react-three/drei"; //Camera Controls
import { useFrame } from '@react-three/fiber';
import React, { Suspense, useState, useRef, useEffect } from "react";
import PhysicsParticles from './PhysicsParticles';
import ImageClickableButton from './ImageClickableButton';
import VideoClickableButton from './VideoClickableButton';
import ArrowPointer from './Primitives/ArrowPointer';
import LinkClickableButton from './LinkClickableButton';

//Code in here is meant for only threejs/webgl scene.

//some control variables
var openedWindow = false;
const instructions = document.getElementById('instructions');
const VideoScene = ()=>
{
    const [rotation, setRotation] = useState(0);
    const [data, setData] = useState(false);
    //references
    const videoSphereRef = useRef();
    const videoChangeRate = 0.5;
    const videoPopUpNodeRange = 2;
    const [showCafeButton, setShowCafeButton]= useState(false);
    const [showCafeButton2, setShowCafeButton2]= useState(false);
    const [showPalaceButton, setShowPalaceButton]= useState(false);
    const [showPhysics, setShowPhysics]= useState(true);
    const [arrowPos, setArrowPos] = useState(0);
    
    const livingRoomTexture = useTexture("./images/LivingRoom.webp");

useFrame((state, delta)=>{ //The Update function, runs each frame
    setRotation(rotation + 0.4 * delta);
});

return (
        <>
            <OrbitControls enableZoom={false} enablePan={false} target={[0,2,0]}></OrbitControls>
            {/* <axesHelper></axesHelper> */}
            <Suspense fallback={
                <>
                    <mesh>
                        <boxGeometry></boxGeometry>
                        <meshBasicMaterial color="red"></meshBasicMaterial>
                    </mesh>
                </>
            }>
                <mesh scale={[-90,90,90]} ref={videoSphereRef}>
                    <sphereGeometry></sphereGeometry>
                    <meshBasicMaterial 
                        color="white" 
                        side={THREE.DoubleSide} 
                        map={livingRoomTexture}>
                        </meshBasicMaterial>
                </mesh>
            </Suspense>
            {/* A Test button for the cafe */}
            {/* {showCafeButton && (<ImageClickableButton buttonName='Cafe Valvet' imgSrc='./images/descriptionImages/CafeValvet.png'></ImageClickableButton>)}
            {showCafeButton2 && (<ImageClickableButton buttonName='Cafe Muren' imgSrc='./images/descriptionImages/CafeMuren.png' buttonPosition={[5,3,20]} closeButtonPosition={[-8, 12, 12]} rotation={[0, Math.PI * 0.5,0]}></ImageClickableButton>)}
            {showPalaceButton && (<VideoClickableButton src="./videos/SDW.mp4"></VideoClickableButton>)} */}
            {/* <VideoClickableButton src='./videos/Suitetogether_walkthrough.mp4' newPos={[5, 2.5, 10]} /> */}

            {/* <ImageClickableButton buttonName='Seaside View' buttonPosition={[20,0,0]} imgSrc='./images/buttons/eye.png' rotation={[0, Math.PI * 0.5, 0]}></ImageClickableButton> */}
            <ImageClickableButton buttonPosition={[20,0,0]}  rotation={[0, Math.PI * 0.5, 0]} />
            <LinkClickableButton  buttonName='Back' buttonPosition={[-10,5,-10]} redirName='CloudSpace'></LinkClickableButton>
            {/* <StoredData.Provider value={{data, setData}}>
                {showPhysics && (
                    <PhysicsParticles></PhysicsParticles>
                )}
            </StoredData.Provider> */}
            <group position={[-3, 0, 0]}>
                <ArrowPointer srcDir="./Models/Description2.glb"></ArrowPointer>
            </group>

            <group position={[0, -6, -20]} rotation={[0, rotation, 0]}>
                {/* <ArrowPointer srcDir='./Models/hologram.glb'></ArrowPointer> */}
            </group>
        </>
    )
}



export default VideoScene;