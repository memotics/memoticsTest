import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useCanvas } from '@14islands/r3f-scroll-rig';
import { BodyCopy, Headline, Subtitle } from "./Text";

export default function DifferentByDesign() {
  useEffect(() => {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType('#target', { type: 'chars' }); // Use SplitType

    const anim = gsap.fromTo(split.chars, {
      // delay: 1,
      'will-change': 'opacity, transform', 
      transformOrigin: '50% 0%',
      opacity: 0,
      rotationY: -90,
      z: -200,
      color: '#fae3db', // Change color to white#ff4d4d
    },
    {
      opacity: 1,
      rotationY: 0,
      z: 0,
      stagger: { each: 0.06, from: 'end'},
      scrollTrigger: {
        trigger: '#target', // Correct trigger selector
        start: 'bottom bottom+=20%',
        end: 'bottom top',
        scrub: 1
      }
    });
  }, []);

  return (
    <useCanvas>
      <div className="parent">
        <div className="child">
          <h2 id="target" className="heading2">
            <span className="font-4 font-upper">Different by Design.</span>
          </h2>
        </div>
        {/* Rest of your code */}
      </div>
    </useCanvas>
  );
}
