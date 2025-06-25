import React from "react";
import { TeamSction } from "./TeamSction";

const Hero = React.lazy(() => import("../components/Hero"));
const About = React.lazy(() => import("../components/About"));
const CoreValues = React.lazy(() => import("../components/CoreValues"));
const WhatWeDo = React.lazy(() => import("../components/WhatWeDo"));
const CallToAction = React.lazy(() => import("../components/CallToAction"));
const Testimonials = React.lazy(() => import("../Testimonials"));
const Contact = React.lazy(() => import("../components/Contact"));

const Home: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      }
    >
      <Hero />
      <About />
      <CoreValues />
      <WhatWeDo />
      <CallToAction />
      <TeamSction />
      <Testimonials />
      <Contact />
    </React.Suspense>
  );
};

export default Home;