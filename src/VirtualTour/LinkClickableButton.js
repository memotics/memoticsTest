import { Html } from "@react-three/drei"; //Camera Controls
import React, { useState, useContext } from "react";
import { StoredData } from "../VirtualTour/Context";

const LinkClickableButton = ({buttonName = "Add Name", buttonPosition = [-10,0,-5], closeButtonPosition = [8, 12, -12], rotation = [0,-1.64,0], scale = [-6,6,6], imgSrc = "", redirName = ""})=>
{
    const {data, updateDropPhysics, updateRenderingSpace} = useContext(StoredData);
    return (
        <>
            <mesh position={buttonPosition}>
                <Html>
                    <div onClick={function(){
                        updateRenderingSpace(redirName);
                    }} style={{zIndex: 2}}>
                        <img src="images/cloud_window.png" id="windowButton" />
                    </div> 
                </Html>
            </mesh> 
        </>
    );
}

export default LinkClickableButton;