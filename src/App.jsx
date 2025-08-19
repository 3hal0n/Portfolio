import React, { useEffect, useState, lazy, Suspense, useRef } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import { ReactLenis } from 'lenis/react';

import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

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
  const lenisRef = useRef(null);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  // Lenis + ScrollTrigger sync to reduce jank and fast-scroll issues
  useEffect(() => {
    // Use GSAP ticker to drive Lenis, ensuring consistent timing
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const update = (time) => {
      // GSAP provides time in seconds; Lenis expects milliseconds
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    // Let ScrollTrigger use fixed update cadence with Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && typeof value === 'number') {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // pinType helps on mobile where transform vs fixed can differ
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onLenisScroll);

    // Refresh after images/3D ready
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      lenis.off('scroll', onLenisScroll);
      gsap.ticker.remove(update);
    };
  }, [isReady]);

  // Component loading fallback
  const ComponentLoader = () => (
    <div className="flex items-center justify-center py-8">
      <div className="w-8 h-8 border-2 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );

  return (
    <ReactLenis ref={lenisRef} root className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Small top progress bar while assets load (non-blocking) */}
      {!isReady && (
        <div className="fixed top-0 left-0 right-0 z-[999] h-1 bg-white/10">
          <div
            className="h-full bg-white transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div>
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
