import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Particles } from "../components/Particles";
import HeroText from "../components/HeroText";
import { Planet } from "../components/Planet";


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
  <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space section-performance">
      <Particles
        className="absolute inset-0 -z-50"
    quantity={80}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <HeroText />
      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          // Performance-friendly WebGL settings for smoother scroll
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: "high-performance", stencil: false, depth: true }}
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          
          <Float speed={0.5} position={isMobile ? [0, -0.6, 0] : [-0.8, 0, 0]}>
            <Planet scale={isMobile ? 0.6 : 0.95} />
          </Float>
          
        
          <Environment resolution={128}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
