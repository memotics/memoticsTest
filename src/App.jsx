import React, { Suspense, useRef, useState, useContext, useEffect, lazy } from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { Environment, Loader } from "@react-three/drei";

import { BodyCopy, Headline, Subtitle } from "./Text";
import { WebGLBackground } from "./WebGLBackground";
import { Lens } from "./Lens";
import CodropsFrame from "./CodropsFrame";
// import EffectsToggle from "./EffectsToggle";

import { StoredData } from "./VirtualTour/Context";

import WatchLayout from "./Watchlayout"
import DifferentByDesign from "./DifferentByDesign";
import Immersively from "./Immersively";

import CloudScroll from "./CloudScroll";

import "@14islands/r3f-scroll-rig/css";
import { text } from "@fortawesome/fontawesome-svg-core";
import SunspotLoader from "./sunspotloader";
const HeadApp = lazy(() => import('./HeadApp'));
// Photos by <a href="https://unsplash.com/@maxberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maxim Berg</a> on <a href="https://unsplash.com/photos/u8maxDvbae8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export default function App() {
  const eventSource = useRef();
  const [enabled, setEnabled] = useState(true);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading data
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);
  return (

    // We attach events onparent div in order to get events on both canvas and DOM
    <div ref={eventSource}>


      <CodropsFrame />
      <GlobalCanvas
        // shader errors are hidden by default which speeds up compilation
        debug={false}
        // scaleMultiplier is a scroll-rig setting to scale the entire scene
        scaleMultiplier={0.01}
        // All other props on the R3F Canvas is supported:
        eventSource={eventSource}
        eventPrefix="client"
        flat // disable toneMapping since we have editorial images
        camera={{ fov: 14 }}
        style={{ pointerEvents: "none", zIndex: -1 }}
      >


        {(globalChildren) => (
          <Lens>
            <WebGLBackground />
            <Suspense fallback="">
              {/* 
                Our materials use PBR ligting and requires an environment
              */}
              <Environment files="env/empty_warehouse_01_1k.hdr" />
              {globalChildren}
            </Suspense>
          </Lens>
        )}
      </GlobalCanvas>
      <SmoothScrollbar
        enabled={enabled}
        config={{ syncTouch: true }} // Lenis setting to force smooth scroll on touch devices
      />

      <article>

        <header className="container">
          <div className="headerLayout">

            <h2 id="headerh2">
              <Headline wobble>
                We architect world class solutions to weave your brand story with immersive Web Magic.
              </Headline>
            </h2>
          </div>
        </header>

        <div className="headAppContainer">
          <Suspense fallback="">
            <HeadApp />
          </Suspense>
          <div className="home-hero-scroll">
            <BodyCopy as="p" className="scrollToExplore">
              SCROLL TO EXPLORE
            </BodyCopy>
          </div>
        </div>


        <section className="container">
          <div className="title">
            <h2 id="titleh2">
              <Headline wobble>
                Bridging Realities: Immersive 3D Platform for All
              </Headline>
            </h2>
          </div>
          <div className="bodyCopyVideoBall">
            <p>
              <BodyCopy>
                Memotics Design Studio: a Service-based Tech Enabler to integrate advanced technologies and create immersive experiences for companies.
              </BodyCopy>
            </p>

            <p>
              <BodyCopy>
                We are architects, digital artists, and entrepreneurs that empowers you to break through the noise, access world-class tools, and captivate global audiences, fostering success in your industry.
              </BodyCopy>
            </p>
            <button href="https://memoversity.io/AboutUs/" className="aboutUsBtn"><a href="https://memoversity.io/AboutUs/">About Us</a></button>
          </div>

          <div className="videoBallEffect">
            <video width="800" crossOrigin="Anonymous" autoPlay loop muted playsInline poster="/images/poster1.webp" preload="none">
              <source src="/videos/sun_ball.mp4" type="video/mp4" />
            </video>
          </div>

        </section>
        <div className="parentDiv">
          {/* <DifferentByDesign/> */}
        </div>
        <section className="container">
          <div className="section3">
            <h2>
              <Headline wobble>
                Different by Design. Built for creatives by Creatives.
              </Headline>
            </h2>
          </div>
        </section>


        <WatchLayout />


        <section className="container" id="ready">
          <h3>
            <Headline wobble>Ready to revolutionize your digital presence? </Headline>
            <em>
              <br />
              <Subtitle>
                Don't just create experiences captivate your audience with our unique new physical reality.
              </Subtitle>
            </em>
          </h3>
          {/* <p className="lastBody">
              <BodyCopy>&#11183;
                In our Memotics context, a new physical reality represents the unique, site-specific experiences with interactions that are contextually designed. It signifies a shift in how brands connect with users, bridging the gap between the physical and digital realms to foster deeper and more meaningful connections.
                This is a transformative and immersive experience that blends & leverage technologies like augmented reality (AR), virtual reality (VR), and mixed reality (MR) to alter how users perceive and interact with their surroundings.
              </BodyCopy>
          </p> */}
        </section>
        {/* <Immersively /> */}

        <h3 id="target2" className="heading2">
          <span className="font-10 font-upper"> Immersive Web Solutions Suite ↓</span>
        </h3>


        <CloudScroll />


        <div id="warning-message" className="rotate">
          <img src="images/rotate.webp" width="100%" alt="Rotate your device" />
        </div>


        <footer>
          <CodropsFrame />
        </footer>
      </article>
{/* 
      {isLoading ? ( // Render the loader if isLoading is true
        <SunspotLoader
          gradientColors={["#ff4d4d", "#fed1c7"]}
          shadowColor={"#fed1c7"}
          desktopSize={"128px"}
          mobileSize={"100px"}
        />
      ) : (
        // Render your data once loading is complete
        <div>
        </div>
      )} */}


      {/* <SunspotLoader
  className={`sunspotloader`}
  background={`transparent`}
  gradientColors={["#FF0000", "#FF0000"]} // Set both gradient colors to red
  shadowColor={`#5B1E00`}
  shadowOpacity={`0.05`}
  size={`64px`}
  desktopSize={``}
  mobileSize={``}
  fe8dc6 fed1c7
/> */}

      <Loader
        containerStyles={{
          background: "#ecf3f6",
          top: "auto",
          bottom: 0,
          height: "100%",
          width: "100%",
          position: "fixed",
          justifyContent: "center", // Center content horizontally
          alignItems: "center" // Center content vertically

        }}
        innerStyles={{ background: "transparent", width: "40vh", height: "105px" }}
        barStyles={{ background: 'linear-gradient(to right bottom, #ff4d4d, #fed1c7)', height: "30%", borderRadius: "50px" }}
        dataStyles={{ color: 'ff4d4d', fontSize: '14px', fontFamily: "Poppins, sans-serif" }}
        dataInterpolation={(p) => `Try to Scroll and Drag ${p.toFixed(2)}%`}
        initialState={(active) => active}
      // containerStyles={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      // innerStyles={{ background: 'white', width: '370px', height: '40px' }}
      // barStyles={{ background: '#ff4d4d', height: '100%' }}
      // dataStyles={{ color: 'white',  fontSize: '24px',fontFamily: "Poppins, sans-serif"}}
      // dataInterpolation={(p) => `Try to Scroll and Drag ${p.toFixed(2)}%`} // Show the loading percentage inside the bar
      // initialState={(active) => active}
      />
    </div>

  );
}
