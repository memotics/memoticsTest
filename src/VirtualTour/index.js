import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Canvas } from "@react-three/fiber"
import reportWebVitals from './reportWebVitals';
import VideoScene from "./VideoScene"
import { isMobile, MobileView } from 'react-device-detect';
import UserInterface from './UserInterface';
import VirtualTour from './VirtualTour';

//function for when the canvas is loaded in
const creatingCanvasHandler = (state) => {
  state.gl.setClearColor("grey", 1.0); //set the background color
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <VirtualTour></VirtualTour>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
