import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const grid2Container = useRef();

  useGSAP(() => {
    // Remove the .about-heading target since it no longer exists
    // AnimatedHeaderSection handles its own animations

    // Animate grid items with staggered entrance
    gsap.from(".grid-item", {
      y: 80,
      opacity: 0,
      delay: 0.3,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
    });

    // Animate grid content with different delays
    gsap.from(".grid-content", {
      x: -30,
      opacity: 0,
      delay: 0.6,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".grid-container",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
    });
  }, []);

  return (
  <section className="relative w-full min-h-screen bg-primary overflow-hidden section-spacing section-performance" id="about">
      {/* Space-themed Background Elements */}
      <div className="absolute inset-0 -z-50">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/6 to-blue-500/6 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <AnimatedHeaderSection
        subTitle={"Exploring the Universe of Code"}
        title={"About Me"}
        text={`My journey through the digital cosmos, crafting innovative solutions and pushing the boundaries of what's possible with code.`}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="grid-container grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[20rem] mt-12 px-4 md:px-10">
        
        {/* Grid 1 - Enhanced Introduction with Space Theme */}
        <div className="grid-item flex items-end col-span-1 md:col-span-3 relative group overflow-hidden rounded-2xl">
          {/* Enhanced Background with Glassmorphism */}
          <div className="absolute inset-0 backdrop-blur-xl bg-black/20 border border-white/10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-900/60"></div>
          
          {/* Coding Image with Better Positioning */}
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.5] -right-[4rem] -top-[0.5rem] md:scale-[2.8] md:left-50 md:inset-y-8 lg:scale-[2.3] opacity-80 group-hover:opacity-90 transition-opacity duration-500"
            alt="Coding workspace"
          />
          
          {/* Content with Better Typography */}
          <div className="grid-content z-10 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Shalon Fernando</span>
            </h3>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
              I'm a 3rd year 1st semester undergraduate at SLIIT. Over the past
              two years, I've developed strong software engineering skills
              across both frontend and backend development, enabling me to build
              dynamic and scalable software and web applications. In my free
              time I participate in hackathons and coding competitions, where I
              enjoy solving complex problems and collaborating with others.
            </p>
          </div>
          
          {/* Enhanced Bottom Gradient */}
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-blue-900/60 to-transparent" />
        </div>
        
        {/* Grid 2 - Resume Section with Space Theme */}
        <div className="grid-item col-span-1 md:col-span-3 relative group overflow-hidden rounded-2xl">
          {/* Background with Enhanced Glassmorphism */}
          <div className="absolute inset-0 backdrop-blur-xl bg-black/20 border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40"></div>
          
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Content Container */}
          <div className="grid-content relative z-10 flex flex-col md:flex-row items-center justify-center h-full p-6 md:p-8 gap-6">
            
            {/* Profile Image with Enhanced Styling */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="assets/grid3.png"
                  alt="Profile avatar"
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover shadow-2xl border-3 border-blue-400/50 bg-slate-800 transition-all duration-500 hover:border-blue-400 hover:shadow-blue-400/30"
                />
                {/* Glowing Ring Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>
              </div>
            </div>
            
            {/* Resume Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              
              {/* Heading */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                My Resume
              </h3>
              
              {/* Description */}
              <p className="text-blue-200 text-sm md:text-base lg:text-lg max-w-md leading-relaxed">
                View my professional experience, skills, and achievements
              </p>
              
              {/* Enhanced Download Button */}
              <a
                href="/assets/ShalonFernando_Resume.pdf"
                download="ShalonFernando_Resume.pdf"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-base md:text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 shadow-xl border border-blue-400/30 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 focus:outline-none focus:ring-4 focus:ring-blue-400/40 active:scale-95 transition-all duration-300 backdrop-blur-sm"
                aria-label="Download Shalon Fernando's Resume"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover/btn:animate-bounce transition-transform duration-300"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"
                  />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Grid 3 - Time Zone with Space Theme */}
        <div className="grid-item col-span-1 md:col-span-2 relative group overflow-hidden rounded-2xl">
          {/* Background */}
          <div className="absolute inset-0 backdrop-blur-xl bg-black/20 border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-black/60"></div>
          
          {/* Content */}
          <div className="grid-content relative z-10 p-6 md:p-8 h-full flex flex-col justify-center">
            <div className="w-[60%] md:w-[50%]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Time Zone</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                I'm based in Miller's planet (Negombo, Sri Lanka), and open to work remotely
              </p>
            </div>
          </div>
          
          {/* Enhanced Globe Positioning */}
          <figure className="absolute right-4 top-4 md:left-[40%] md:top-[15%] opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Contact CTA with Space Theme */}
        <div className="grid-item col-span-1 md:col-span-2 relative group overflow-hidden rounded-2xl">
          {/* Background */}
          <div className="absolute inset-0 backdrop-blur-xl bg-black/20 border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40"></div>
          
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Content */}
          <div className="grid-content relative z-10 flex flex-col items-center justify-center gap-6 h-full p-6 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight max-w-sm">
              Ready to start a project together?
            </h3>
            <p className="text-purple-200 text-sm md:text-base max-w-xs">
              Let's collaborate and build something amazing
            </p>
            <CopyEmailButton />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-lg"></div>
        </div>

        {/* Grid 5 - Tech Stack with Space Theme */}
        <div className="grid-item col-span-1 md:col-span-2 relative group overflow-hidden rounded-2xl">
          {/* Background */}
          <div className="absolute inset-0 backdrop-blur-xl bg-black/20 border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-900/60"></div>
          
          {/* Content */}
          <div className="grid-content relative z-10 p-6 md:p-8 h-full flex flex-col justify-center">
            <div className="w-[50%]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                I specialize in a variety of languages, frameworks, and tools that
                allow me to build robust and scalable applications
              </p>
            </div>
          </div>
          
          {/* Frameworks Component with Better Positioning */}
          <div className="absolute inset-y-4 md:inset-y-8 w-full h-full start-[45%] md:scale-110 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
