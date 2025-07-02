import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Particles } from "../components/Particles";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { Astronaut } from "../components/Astronaut";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Blackhole } from "../components/Blackhole";
import { Ranger } from "../components/Ranger";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [-2, -1, 8] }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 10, 7]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          <pointLight position={[-5, 5, 5]} intensity={0.5} castShadow />
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
          <Suspense fallback={<Loader />}>
            {/* <Float>
              <Ranger
                scale={isMobile ? 0.13 : 0.7}
                position={isMobile ? [0, -0.8, -1.5] : [4.2, 2.1, -7]}
                rotation={[0.4, 0.2, 0]}
                castShadow
                receiveShadow
              />
            </Float> */}
            <Float>
              <Astronaut
                scale={isMobile ? 0.3 : 1.2}
                position={isMobile ? [1.2, -0.8, 0] : [2, -1.1, 0.2]}
                rotation={[0, 0, 0]}
                playAnimation
                castShadow
                receiveShadow
              />
            </Float>
            
              <Blackhole
                scale={isMobile ? 0.2 : 0.6}
                position={isMobile ? [-1.2, -0.8, 0] : [-2, 1.2, 0]}
                rotation={[0.2, 5, 0]}
                castShadow
                receiveShadow
                playAnimation
              />
            
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
