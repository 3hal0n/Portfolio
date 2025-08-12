import { Icon } from "@iconify/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { myProjects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const text = `Selected projects from across the galaxy,
    meticulously crafted with stellar precision to
    drive stellar results and cosmic impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

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
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  // Updated project click handler - opens modal instead of navigating
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen c-space">
      <AnimatedHeaderSection
        subTitle={"Cosmic Code meets Stellar Design"}
        title={"My Selected Projects"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      
      
      
      <div
        className="relative flex flex-col font-light mt-8"
        onMouseMove={handleMouseMove}
      >
        {myProjects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0 transition-transform duration-300 hover:scale-[1.02]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleProjectClick(project)}
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 -z-10 clip-path"
            />

            {/* title */}
            <div className="flex justify-between px-10 text-white transition-all duration-500 md:group-hover:px-12">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.title}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            
            {/* divider */}
            <div className="w-full h-0.5 bg-white/20" />
            
            {/* technologies/frameworks */}
            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12 flex-wrap">
              {project.tags?.map((tag) => (
                <p
                  key={tag.id}
                  className="text-neutral-400 transition-colors duration-500 md:group-hover:text-white"
                >
                  {tag.name}
                </p>
              ))}
            </div>
            
            {/* mobile preview image */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img
                src={project.image}
                alt={`${project.title}-image`}
                className="object-cover w-full h-full rounded-md brightness-75"
              />
            </div>
          </div>
        ))}
        
        {/* desktop floating preview image */}
        <div
          ref={previewRef}
          className="fixed top-0 left-0 z-50 overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20 pointer-events-none w-[400px] h-[300px] md:block hidden opacity-0 rounded-lg"
        >
          {currentIndex !== null && (
            <img
              src={myProjects[currentIndex].image}
              alt="preview"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="bg-gray-900/95 border border-purple-500/30 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto mx-4 relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-2"
            >
              <Icon icon="lucide:x" className="size-6" />
            </button>

            <div className="p-8">
              {/* Project Image */}
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              {/* Technologies */}
              <div className="flex gap-2 flex-wrap mb-6">
                {selectedProject.tags?.map(tag => (
                  <span 
                    key={tag.id} 
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-3">Overview</h4>
                <p className="text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Features */}
              {selectedProject.subDescription && selectedProject.subDescription.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2 max-h-60 overflow-y-auto">
                    {selectedProject.subDescription.map((feature, index) => (
                      <li key={index} className="text-neutral-300 flex items-start gap-2">
                        <Icon icon="lucide:check-circle" className="size-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {selectedProject.href && (
                  <button 
                    onClick={() => window.open(selectedProject.href, '_blank')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <Icon icon="lucide:github" className="size-5" />
                    View on GitHub
                  </button>
                )}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="border border-purple-500/30 text-purple-300 hover:bg-purple-600/10 px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
