import * as THREE from 'three';
import { OrbitControls, Loader } from "@react-three/drei"; //Camera Controls
import { useFrame } from '@react-three/fiber';
import React, { Suspense, useState, useRef, useEffect } from "react";
import PhysicsParticles from './PhysicsParticles';
import ImageClickableButton from './ImageClickableButton';
import VideoClickableButton from './VideoClickableButton';
import { StoredData } from './Context';
import ArrowPointer from './Primitives/ArrowPointer';
import LinkClickableButton from './LinkClickableButton';

function disableScroll() {
    // Get the current page scroll position
    let scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;
    let scrollLeft =
        window.scrollX ||
        document.documentElement.scrollLeft;

        // if any scroll is attempted,
        // set this to the previous value
        body.onscroll = function () {
            body.scrollTo(scrollLeft,scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}
//Code in here is meant for only threejs/webgl scene.

let scrollAmt = 0;
let totalScroll = 10000;


//some control variables
var openedWindow = false;
var cameraControl = false;
// const bodyScrollLock = require('body-scroll-lock');
// const disableBodyScroll = bodyScrollLock.disableBodyScroll;
// const enableBodyScroll = bodyScrollLock.enableBodyScroll;


function ResetScroll() {
    scrollAmt = 0;
}

const body = document.getElementById('body');
const VideoScene = ()=>
{
    console.log(window.scrollY);
    disableScroll();
    const [data, setData] = useState(false);
    //references
    const videoSphereRef = useRef();
    const videoChangeRate = 0.05;
    const videoPopUpNodeRange = 0.05;
    const [showCafeButton, setShowCafeButton]= useState(false);
    const [showCafeButton2, setShowCafeButton2]= useState(false);
    const [showPalaceButton, setShowPalaceButton]= useState(false);
    const [showBackButton, setShowBackButton] = useState(false);
    const [showPhysics, setShowPhysics]= useState(true);
    const [arrowPos, setArrowPos] = useState(true);
    const [instructions, setInstructions] = useState(true);
    
    const [video] = useState(() => {
        console.log("Made Video");
        const vid = document.createElement("video");
        vid.src = "./videos/Sequence07.mp4";
        vid.preload = "auto";
        vid.playsInline = true;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        return vid;
    });
    

    useEffect(() => {
        console.log("Binding Key presses");
        ResetScroll();
        // disableBodyScroll(body);
        window.addEventListener('keydown', (event) => {
            if (openedWindow)
                return;
            if (event.key === 'ArrowUp' || event.key === 'w')
            {
                video.currentTime += videoChangeRate;
                
                //setShowPhysics(false);
                setData({...data, dropPhysics: true});
                setArrowPos(false);
                setInstructions(false);
                if (setShowPhysics)
                {;
                    setTimeout(() => {
                        // Code to be executed after x seconds
                        setShowPhysics(false);
                    }, 5 * 1000); // Convert x seconds to milliseconds
                }
            }
            else if (event.key === 'ArrowDown' || event.key === 's')
            {
                video.currentTime -= videoChangeRate;
                //setShowPhysics(false);
                if (setShowPhysics)
                {
                    setTimeout(() => {
                        // Code to be executed after x seconds
                        setShowPhysics(false);
                    }, 5 * 1000); // Convert x seconds to milliseconds
                }
                setData({...data, dropPhysics: true});
                setArrowPos(false);
                setInstructions(false);
            }
            setShowCafeButton2(video.currentTime >= 0.2 - videoPopUpNodeRange && video.currentTime <= 0.2 + videoPopUpNodeRange);
            setShowCafeButton(video.currentTime >= 5.3 - videoPopUpNodeRange && video.currentTime <= 5.3 + videoPopUpNodeRange);
            setShowPalaceButton(video.currentTime >= 8 - videoPopUpNodeRange && video.currentTime <= 8 + videoPopUpNodeRange);
            setShowBackButton(video.currentTime >= 8.2);
        })
    window.addEventListener('wheel', (event)=>{
        if (openedWindow)
            return;
        // if (event.deltaY > 0)
        // {
        //     video.currentTime += videoChangeRate;
        //     // setShowPhysics(false);
        //     setData({...data, dropPhysics: true});
        //     if (setShowPhysics)
        //     {
        //         setTimeout(() => {
        //             // Code to be executed after x seconds
        //             setShowPhysics(false);
        //         }, 5 * 1000); // Convert x seconds to milliseconds
        //     }
        //     setData({...data, dropPhysics: true});
        //     setArrowPos(false);
        //     setInstructions(false);
        // }
        // else if (event.deltaY < 0)
        // {
        //     video.currentTime -= videoChangeRate;
        //     // setShowPhysics(false);
        //     setData({...data, dropPhysics: true});
        //     setArrowPos(false);
        //     setInstructions(false);
        //     if (setShowPhysics)
        //     {
        //         setTimeout(() => {
        //             // Code to be executed after x seconds
        //             setShowPhysics(false);
        //         }, 5 * 1000); // Convert x seconds to milliseconds
        //     }
        // }

        scrollAmt += event.deltaY;
        if (scrollAmt <= 0) scrollAmt = 0;
        if (scrollAmt > totalScroll) scrollAmt = totalScroll;

        var percentage = scrollAmt / totalScroll;
        if (percentage > 0.9) percentage = 0.9;

        video.currentTime = video.duration * percentage;


        //console.log("Current Time" + video.currentTime);
        console.log(scrollAmt);
        setShowCafeButton2(video.currentTime >= 0.13 - videoPopUpNodeRange && video.currentTime <= 0.13 + videoPopUpNodeRange);
            setShowCafeButton(video.currentTime >= 0.19 - videoPopUpNodeRange && video.currentTime <= 0.19 + videoPopUpNodeRange);
            setShowPalaceButton(video.currentTime >= 0.29 - videoPopUpNodeRange && video.currentTime <= 0.29 + videoPopUpNodeRange);
            setArrowPos(false);
            setInstructions(false);
            setShowBackButton(video.currentTime >= 0.15);
    })
}, []);

video.addEventListener("loadeddata", (event) => {
    cameraControl = true;
  });

// useFrame((state, delta)=>{ //The Update function, runs each frame
    
// });

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
                <mesh scale={[-90,90,90]} ref={videoSphereRef} rotation={[0, Math.PI * 0.5, 0]}>
                    <sphereGeometry></sphereGeometry>
                    <meshBasicMaterial 
                        color="white" 
                        side={THREE.DoubleSide} >
                            <videoTexture attach="map" args={[video]} />
                        </meshBasicMaterial>
                </mesh>
                <Loader />
            </Suspense>
            {/* A Test button for the cafe */}
            {showCafeButton && (<ImageClickableButton buttonName='Cafe Valvet' imgSrc='./images/descriptionImages/CafeValvet.png' buttonPosition={[-20, 0, 10]} rotation={[0, Math.PI * -0.3, 0]}></ImageClickableButton>)}
            {showCafeButton2 && (<ImageClickableButton buttonName='Cafe Muren' imgSrc='./images/descriptionImages/CafeMuren.png' buttonPosition={[20,3,0]} closeButtonPosition={[-8, 12, 12]} rotation={[0, -Math.PI * -0.5,0]}></ImageClickableButton>)}
            {showPalaceButton && (<VideoClickableButton src="./videos/SDW.mp4"></VideoClickableButton>)}
            {showBackButton && (<LinkClickableButton imgSrc='https://memoversity.io/CloudSpace/' buttonName='Return To Clouds' buttonPosition={[9, 4, 20]} redirName='CloudSpace'></LinkClickableButton>)}
            {/* <StoredData.Provider value={{data, setData}}>
                {showPhysics && (
                    <PhysicsParticles></PhysicsParticles>
                )}
            </StoredData.Provider> */}
            {arrowPos && (
                // <group position={[0.5, -7, -0.5]} rotation={[0,-Math.PI * 0.25, 0]}>
                <group position={[0.5, -7, -0.5]} rotation={[0,-Math.PI * 0, 0]}>
                    <ArrowPointer></ArrowPointer>
                </group>
            )}
        </>
    )
}



export default VideoScene;