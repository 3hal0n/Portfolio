import React, { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ReactLenis from "lenis/react";
import { useProgress } from "@react-three/drei";

// Lazy load components for better performance
const About = lazy(() => import("./sections/About"));
const Education = lazy(() => import("./sections/Education"));
const Projects = lazy(() => import("./sections/Projects"));
const Testimonial = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  // Component loading fallback
  const ComponentLoader = () => (
    <div className="flex items-center justify-center py-8">
      <div className="w-8 h-8 border-2 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-hidden">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <main className="relative">
          <Hero />
          
          <Suspense fallback={<ComponentLoader />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<ComponentLoader />}>
            <Education />
          </Suspense>
          
          <Suspense fallback={<ComponentLoader />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<ComponentLoader />}>
            <Testimonial />
          </Suspense>
          
          <Suspense fallback={<ComponentLoader />}>
            <Contact />
          </Suspense>
        </main>
        
        <Suspense fallback={<ComponentLoader />}>
          <Footer />
        </Suspense>
      </div>
    </ReactLenis>
  );
};

export default App;
