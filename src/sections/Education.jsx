import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { educationExperiences } from '../constants/index.js';
import { Model as Earth } from '../components/Earth.jsx';
import { Particles } from '../components/Particles';
import { Timeline } from '../components/Timeline';

const Education = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-primary overflow-hidden" id="education">
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color="#ffffff" refresh />
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8 z-10 p-2 md:p-8">
        {/* Earth model on top for mobile, left for desktop */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-64 md:h-screen mb-4 md:mb-0">
          <Canvas 
            camera={{ position: [0, 0, 6], fov: 50 }} 
            style={{ 
              width: '100%', 
              height: '100%',
              minHeight: '250px',
              maxHeight: '400px',
              background: 'transparent'
            }} 
            shadows
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 10, 7]} intensity={2.5} color={'#fff'} castShadow />
            <directionalLight position={[-5, -10, -7]} intensity={1.5} color={'#fff'} />
            <Suspense fallback={<CanvasLoader />}>
              <Earth scale={2.5} position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
        </div>
        {/* Timeline below for mobile, right for desktop */}
        <div className="w-full md:w-1/2">
          <Timeline data={educationExperiences} />
        </div>
      </div>
    </section>
  );
};

export default Education;