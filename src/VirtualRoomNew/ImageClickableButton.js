import { Html } from "@react-three/drei"; //Camera Controls
import React, { Suspense, useState } from "react";
import ImageScreen from "./ImageScreen";
import Plaque from "./Primitives/Plague";
import ArrowPointer from "./Primitives/ArrowPointer";


const ImageClickableButton = ({buttonName = "Add Name", buttonPosition = [-10,0,-5], closeButtonPosition = [8, 12, -12], rotation = [0,-1.64,0], scale = [-6,6,6], imgSrc = ""})=>
{
    const [opened, setOpened] = useState(false);
    return (
        <>
            <mesh position={buttonPosition}>
                {!opened && (<Html>
                    <img src={imgSrc} onClick={function(){
                        console.log("clicked");
                        setOpened(true);
                    }} style={{width: '10vw', height: '20vh', zIndex: 1}}>
                    </img>
                </Html>)}
                {opened && (<Html position={closeButtonPosition}>
                    <div 
                        className='worldSpaceClickableButton'
                        style={{fontSize: "30px", zIndex: 1}}
                        onClick={function(){
                            setOpened(false);}}>X</div>
                </Html>)}
            </mesh> 
            <group position={buttonPosition} rotation={rotation} scale={scale}>
                <Suspense>
                    {opened && (<ArrowPointer srcDir="./models/Seaside_panoramic.glb"></ArrowPointer>)}
                </Suspense>
            </group>
        </>
    );
}

export default ImageClickableButton;