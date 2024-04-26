import React, { lazy, Suspense } from 'react';
import { BodyCopy, Headline, Subtitle } from "./Text";
import { GlobalCanvas, ScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

const FloatBoy = lazy(() => import('./FloatBoy')); // Assuming FloatBoy component file is in the same directory

const WatchLayout = () => {
  return (
    <section className="watchlayout">
       
      <Suspense fallback="">    
        <FloatBoy />
      </Suspense>
      
      <div className="watchBody">
        <p>
          <BodyCopy>
            Our design expertise and empathetic approach allow us to create intuitive, site-specific experiences that seamlessly integrate with spaces and places, fostering meaningful connections.
          </BodyCopy>
          <br />
          <br />
          <BodyCopy>
            By focusing on B2B2C journeys, we empower enterprises to captivate their target audience with personalized, engaging experiences, understanding their entire customer journey.
          </BodyCopy>
          <br />
          <BodyCopy>
            At MDS, we specialize in crafting immersive digital experiences tailored to each brand's unique identity.
          </BodyCopy>
        </p>
      </div>
    </section>
  );
}

export default WatchLayout;
