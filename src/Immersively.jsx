import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useCanvas } from '@14islands/r3f-scroll-rig';
import { BodyCopy, Headline, Subtitle } from "./Text";

export default function Immersively() {
  useEffect(() => {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType('#target2', { type: 'chars' }); // Use SplitType

    const anim = gsap.fromTo(split.chars, {
      
      // delay: 1,
      'will-change': 'opacity, transform', 
            transformOrigin: '50% 50% -200px',
            rotationX: 380,
            xPercent: -80,
            opacity: 0,
            color: '#fae3db', // Change color to white#eabda2
    },
    {
      ease: 'expo.inOut',
      rotationX: 0,
      xPercent: 0,
      z: 0,
      opacity: 1,
      stagger: -0.03,
      scrollTrigger: {
        trigger: '#target2', // Correct trigger selector
        start: 'bottom bottom+=20%',
        end: 'bottom center',
        scrub: 1.2,
      }
    });
  }, []);

  return (
    <useCanvas>
       <h3 id="target2" className="heading2">
          <span className="font-10 font-upper"> Immersive Web Solutions Suite ↓</span>
        </h3>
    </useCanvas>
  );
}
