import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Particles } from "../components/Particles";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedInterstellarShip from "../components/AnimatedInterstellarShip";
import Marquee from "../components/Marquee";
import { Canvas } from "@react-three/fiber";
import { mySocials } from "../constants";

const Contact = () => {
  const text = `Got a stellar project idea or cosmic question?
    I'd love to hear from you and discuss how we can
    bring your vision to life across the digital universe.`;

  const marqueeItems = [
    "Let's Build Together",
    "Stellar Solutions",
    "Cosmic Creativity", 
    "Digital Innovation",
    "Future-Ready Code",
  ];

  useGSAP(() => {
    gsap.from(".contact-section", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".contact-section",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black relative"
    >
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
      
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code It"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        
        <div className="grid lg:grid-cols-2 gap-12 px-10 mb-10">
          {/* Contact Information */}
          <div className="flex flex-col gap-8 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none">
            <div className="contact-section">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a 
                href="mailto:shalonfernando52@gmail.com"
                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl hover:text-purple-400 transition-colors duration-300"
              >
                shalonfernando52@gmail.com
              </a>
            </div>
            
            <div className="contact-section">
              <h2>Location</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                Sri Lanka
              </p>
            </div>
            
            <div className="contact-section">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {mySocials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs leading-loose tracking-wide uppercase md:text-sm hover:text-purple-400 transition-colors duration-300"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Model Section */}
          <div className="contact-section flex items-center justify-center">
            <div className="w-full h-[400px] md:h-[500px] relative">
              <Canvas 
                camera={{ position: [0, 0, 10] }} 
                style={{ width: "100%", height: "100%" }}
                className="rounded-lg border border-purple-500/20"
              >
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <pointLight position={[-5, 5, 5]} intensity={0.7} />
                <AnimatedInterstellarShip 
                  scale={0.015} 
                  position={[0, 0, 0]} 
                  rotation={[0, Math.PI / 2, 0]} 
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
      
      <Marquee 
        items={marqueeItems} 
        className="text-white bg-transparent border-t border-purple-500/20" 
      />
    </section>
  );
};

export default Contact;
