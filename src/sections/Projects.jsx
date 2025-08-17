import { Icon } from "@iconify/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { myProjects } from "../constants";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const projectRefs = useRef([]);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const text = `Selected projects from across the galaxy,
    meticulously crafted with stellar precision to
    drive stellar results and cosmic impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  // Ensure projects load immediately
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useGSAP(() => {
    if (!isLoaded) return;

    // Initialize preview movement
    if (previewRef.current) {
      moveX.current = gsap.quickTo(previewRef.current, "x", {
        duration: 1.2,
        ease: "power3.out",
      });
      moveY.current = gsap.quickTo(previewRef.current, "y", {
        duration: 1.5,
        ease: "power3.out",
      });

      // Set initial states for preview
      gsap.set(previewRef.current, {
        opacity: 0,
        scale: 0.9
      });
    }

    // Set initial states for overlays only if they exist
    if (overlayRefs.current.length > 0) {
      gsap.set(overlayRefs.current.filter(Boolean), {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      });
    }

    // Animate projects entrance only if project refs exist
    const validProjectRefs = projectRefs.current.filter(Boolean);
    if (validProjectRefs.length > 0) {
      gsap.fromTo(validProjectRefs, 
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.3,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [isLoaded]);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.4,
        ease: "power2.out",
      }
    );

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.3,
      ease: "power2.in",
    });

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768 || !moveX.current || !moveY.current) return;
    mouse.current.x = e.clientX + 32;
    mouse.current.y = e.clientY - 150;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Show loading state if projects aren't ready
  if (!myProjects || myProjects.length === 0) {
    return (
      <section 
        id="work" 
        className="relative w-full min-h-screen bg-primary overflow-hidden flex items-center justify-center"
      >
        <div className="text-white text-xl">Loading projects...</div>
      </section>
    );
  }

  return (
    <section 
      id="work" 
      className="relative w-full min-h-screen bg-primary overflow-hidden section-performance"
    >
      {/* Space-themed Background Elements */}
      <div className="absolute inset-0 -z-50">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="c-space py-20">
        <AnimatedHeaderSection
          subTitle={"Cosmic Code meets Stellar Design"}
          title={"My Selected Projects"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        
        <div
          className="projects-container relative flex flex-col font-light mt-12"
          onMouseMove={handleMouseMove}
        >
          {myProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) projectRefs.current[index] = el;
              }}
              className={`project-item relative flex flex-col gap-1 py-6 cursor-pointer group transition-all duration-500 hover:scale-[1.01] rounded-xl mx-2 ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleProjectClick(project)}
            >
              {/* Enhanced overlay with better initial state */}
              <div
                ref={(el) => {
                  if (el) overlayRefs.current[index] = el;
                }}
                className="absolute inset-0 hidden md:block bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 backdrop-blur-sm rounded-xl border border-white/5"
              />

              {/* Project title with improved spacing */}
              <div className="relative z-10 flex justify-between items-center px-8 md:px-12 text-white transition-all duration-500 md:group-hover:px-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                    <Icon 
                      icon="lucide:arrow-up-right" 
                      className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Enhanced divider */}
              <div className="relative z-10 mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/50 transition-all duration-500" />
              
              {/* Technologies with improved layout */}
              <div className="relative z-10 flex px-8 md:px-12 py-3 text-sm md:text-base leading-relaxed uppercase transition-all duration-500 gap-6 md:group-hover:px-16 flex-wrap">
                {project.tags?.map((tag, tagIndex) => (
                  <div key={tag.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <p className="text-gray-400 group-hover:text-white transition-all duration-300 font-medium tracking-wider">
                      {tag.name}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Enhanced mobile preview */}
              <div className="relative z-10 flex items-center justify-center px-8 md:hidden mt-4">
                <div className="relative group/img overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={project.image}
                    alt={`${project.title}-preview`}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements for space theme */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
          
          {/* Enhanced desktop floating preview */}
          <div
            ref={previewRef}
            className="fixed top-0 left-0 z-50 overflow-hidden pointer-events-none w-96 h-72 md:block hidden rounded-xl shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 rounded-xl"></div>
            {currentIndex !== null && myProjects[currentIndex] && (
              <>
                <img
                  src={myProjects[currentIndex].image}
                  alt="preview"
                  className="relative z-10 object-cover w-full h-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h4 className="text-white font-bold text-lg mb-1">
                    {myProjects[currentIndex].title}
                  </h4>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {myProjects[currentIndex].description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-2xl">
            {/* Background with glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-black/95 backdrop-blur-xl border border-white/10"></div>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-30 text-white/70 hover:text-white transition-all duration-300 bg-black/50 hover:bg-black/70 rounded-full p-3 backdrop-blur-sm border border-white/10"
            >
              <Icon icon="lucide:x" className="w-6 h-6" />
            </button>

            <div className="relative z-20 overflow-y-auto max-h-[95vh] p-8">
              {/* Project Image */}
              <div className="mb-8 overflow-hidden rounded-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Project Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {selectedProject.title}
                  </h3>

                  {/* Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Icon icon="lucide:info" className="w-5 h-5 text-blue-400" />
                      Overview
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Features */}
                  {selectedProject.subDescription && selectedProject.subDescription.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Icon icon="lucide:star" className="w-5 h-5 text-purple-400" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                        {selectedProject.subDescription.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300">
                            <Icon icon="lucide:check-circle" className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Icon icon="lucide:code" className="w-5 h-5 text-cyan-400" />
                      Technologies
                    </h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.tags?.map(tag => (
                        <span 
                          key={tag.id} 
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-colors duration-300"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4">
                    {selectedProject.href && (
                      <button 
                        onClick={() => window.open(selectedProject.href, '_blank')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 font-semibold shadow-lg"
                      >
                        <Icon icon="lucide:github" className="w-5 h-5" />
                        View on GitHub
                      </button>
                    )}
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="border border-purple-500/30 text-purple-300 hover:bg-purple-600/10 hover:border-purple-400/50 px-6 py-4 rounded-xl transition-all duration-300 font-semibold"
                    >
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
