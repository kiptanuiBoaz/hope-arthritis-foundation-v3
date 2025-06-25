import React from "react";
import { TeamSction } from "./TeamSction";

const Hero = React.lazy(() => import("../components/Hero"));
const About = React.lazy(() => import("../components/About"));
const CoreValues = React.lazy(() => import("../components/CoreValues"));
const WhatWeDo = React.lazy(() => import("../components/WhatWeDo"));
const Team = React.lazy(() => import("../components/Team"));
const Testimonials = React.lazy(() => import("../Testimonials"));
const Contact = React.lazy(() => import("../components/Contact"));

const Home: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Hero />
      <About />
      <CoreValues />
      <WhatWeDo />
      <TeamSction />
      <Testimonials />
      <Contact />
    </React.Suspense>
  );
};

export default Home;
