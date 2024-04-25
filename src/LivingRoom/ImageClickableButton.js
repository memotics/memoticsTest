import { Html } from "@react-three/drei"; //Camera Controls
import React, { Suspense, useState } from "react";
import ImageScreen from "./ImageScreen";
import Plaque from "./Primitives/Plague";
import ArrowPointer from "./Primitives/ArrowPointer";

const ImageClickableButton = ({buttonName = "Click to see Outdoor", buttonPosition = [-10,0,-5], closeButtonPosition = [8, 12, -12], rotation = [0,-1.64,0], scale = [-6,6,6], imgSrc = ""}) => {
    const [opened, setOpened] = useState(false);
    
    return (
        <>
            <mesh position={buttonPosition}>
                {!opened && (
                    <Html>
                        <div className='customButton' onClick={() => setOpened(true)}>{buttonName}</div>
                    </Html>
                )}
                {opened && (
                    <Html position={closeButtonPosition}>
                        <div className='worldSpaceClickableButton' style={{fontSize: "30px", zIndex: 1}} onClick={() => setOpened(false)}>X</div>
                    </Html>
                )}
            </mesh>
            {opened && <ImageScreen srcDir={imgSrc} position={buttonPosition} rotation={rotation} scale={scale}></ImageScreen>}
        </>
    );
}

export default ImageClickableButton;
