import { Particles } from "../components/Particles";
import HeroText from "../components/HeroText";


const Hero = () => {
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space section-performance">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={80}
        ease={80}
        color={"#ffffff"}
        refresh
        style={{ background: "transparent" }}
      />
      <HeroText />
      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* 3D Canvas and models removed to disable 3D rendering in the hero section. */}
        <div className="w-full h-full" />
      </figure>
    </section>
  );
};

export default Hero;
