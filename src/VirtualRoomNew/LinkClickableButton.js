import { Html } from "@react-three/drei"; //Camera Controls
import React, { useState } from "react";

const LinkClickableButton = ({buttonName = "Add Name", buttonPosition = [-10,0,-5], closeButtonPosition = [8, 12, -12], rotation = [0,-1.64,0], scale = [-6,6,6], imgSrc = "", redirSrc = ""})=>
{
    return (
        <>
            <mesh position={buttonPosition}>
                <Html>
                    <img onClick={function(){
                        console.log("clicked");
                        window.location.href = redirSrc.toString();
                    }} style={{width: '175px', height:'50px'}} src={imgSrc}>
                    </img>
                </Html>
            </mesh> 
        </>
    );
}

export default LinkClickableButton;