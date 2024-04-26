import React, { useEffect, useContext, useRef, lazy, Suspense } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Lazy load components
// const VirtualTour = lazy(() => import("./VirtualTour/VirtualTour"));
// const LivingRoom = lazy(() => import("./LivingRoom/LivingRoom"));
// import  HakimiApp  from "./Hakimi/App";
import { StoredData } from "./VirtualTour/Context";
import { ErrorBoundary } from "react-error-boundary";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const CloudScroll = () => {
  const { data } = useContext(StoredData);
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const dragTopRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const drag = dragRef.current;
    const dragTop = dragTopRef.current;

    gsap.set('.fromLeft', {yPercent:-50})


    gsap.from(container, {
      scrollTrigger : {
        trigger: container,
        toggleActions: "play none none reverse",
        start: "200px 80%",
        end: "200px 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.25
    });

    // gsap.fromTo(container, { opacity: 0, scale: 1 }, {
    //   opacity: 1,
    //   scale: 1,
    //   duration: 1,
    //   ease: 'power2.inOut',
    //   scrollTrigger: {
    //     trigger: container,
    //    start: "top top+=200",
    //     end: "top top-=100",
    //     scrub: true,
    //     toggleActions: "play none none none" // Remove "reverse" option
    //   }
    // });

   
    gsap.fromTo(".drag", { opacity: 0, scale: 1 }, {
      opacity: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom', // Change the start position to make it more interesting
        end: 'bottom bottom',
        scrub: true,
        onToggle: self => {
          if (self.isActive) {
            gsap.to(drag, { opacity: 1, duration: 1, delay: 6 }); // Hide drag after 11 seconds
          }
        }
      }
    });

    gsap.fromTo(".dragTop", { opacity: 0, scale: 1 }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom', // Change the start position to make it more interesting
        end: 'bottom bottom',
        scrub: true,
        onToggle: self => {
          if (self.isActive) {
            gsap.to(dragTop, { opacity: 0, duration: 1, delay: 5 }); // Hide drag2 after 10 seconds
          }
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
 
  }, []);

  return (
    <div ref={containerRef} className="containerHakimi">
      <div ref={dragRef} className="drag">
        <img src="images/drag.webp" alt="" />
      </div>
      <div ref={dragTopRef} className="dragTop">
        <img src="images/drag.webp" alt="" />
      </div>
      {/* Lazy load components with Suspense */}
{/* 
        {data.RenderSpace === "CloudSpace" && <HakimiApp />}
        <Suspense fallback={<div>Loading...</div>}>
        {data.RenderSpace === "VirtualTour" && <VirtualTour />}
        {data.RenderSpace === "LivingRoom" && <LivingRoom />} */}
      {/* </Suspense> */}
    </div>
  );
};

export default CloudScroll;
