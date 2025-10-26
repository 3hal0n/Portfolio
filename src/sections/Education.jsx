import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { educationExperiences } from '../constants/index.js';
import { Particles } from '../components/Particles';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import Marquee from '../components/Marquee';
import gsap from 'gsap';

const Education = () => {
  const text = `My educational journey through the cosmos of knowledge,
    building the foundation for stellar development skills!`;
  
  const marqueeItems = [
    "Code • Learn • Grow • Repeat",
    "Code • Learn • Grow • Repeat", 
    "Code • Learn • Grow • Repeat",
    "Code • Learn • Grow • Repeat",
    "Code • Learn • Grow • Repeat",
  ];

  useGSAP(() => {
    // Animate education cards with enhanced timing
    const educationAnim = gsap.from(".education-card", {
      y: 80,
      opacity: 0,
      delay: 0.3,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".education-timeline",
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
    });

    // Animate institution logos with smooth entrance
    const logoAnim = gsap.from(".institution-logo", {
      scale: 0.5,
      rotation: 180,
      opacity: 0,
      delay: 0.6,
      duration: 1,
      stagger: 0.15,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: ".education-timeline",
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
    });

    // Animate timeline line
    const timelineAnim = gsap.fromTo(".timeline-line", 
      {
        scaleY: 0,
        transformOrigin: "top center"
      },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".education-timeline",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
      }
    );

    // Animate achievement tags
    const achievementAnim = gsap.from(".achievement-tag", {
      x: -20,
      opacity: 0,
      delay: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".education-timeline",
        start: "top 70%",
        toggleActions: "play none none reverse"
      },
    });

    // Animate stats boxes
    const statsAnim = gsap.from(".stats-box", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
    });

    return () => {
      [educationAnim, logoAnim, timelineAnim, achievementAnim, statsAnim].forEach(anim => anim && anim.kill());
      if (window.ScrollTrigger && window.ScrollTrigger.getAll) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      } else if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.getAll) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      id="education"
      className="flex flex-col justify-between min-h-screen bg-primary overflow-hidden relative section-performance"
    >
      {/* Particles Background */}
      <Particles 
        className="absolute inset-0 -z-50" 
        quantity={90} 
        ease={60} 
        color="#ffffff" 
        refresh 
      />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-40">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/6 to-blue-500/6 rounded-full blur-3xl"></div>
      </div>

      <div className="flex-1">
        {/* Header Section */}
        <AnimatedHeaderSection
          subTitle={"Learning Never Stops"}
          title={"Education"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        {/* Main Content - Centered Timeline */}
        <div className="px-4 md:px-10 py-8 flex justify-center">
          <div className="w-full max-w-4xl">
            
            {/* Education Timeline */}
            <div className="education-timeline relative">
              {/* Central Timeline Line */}
              <div className="timeline-line absolute left-8 md:left-16 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-60"></div>
              
              <div className="space-y-12">
                {educationExperiences.map((education, index) => (
                  <div key={index} className="education-card relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-14 top-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-primary z-10 shadow-lg">
                      <div className="w-full h-full bg-white rounded-full animate-pulse opacity-60"></div>
                    </div>

                    {/* Education Card */}
                    <div className="ml-20 md:ml-32 relative">
                      {/* Card Container with Enhanced Glassmorphism */}
                      <div className="relative group">
                        {/* Background Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
                        
                        {/* Main Card */}
                        <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 group-hover:border-white/20 transition-all duration-300">
                          
                          {/* Header Section */}
                          <div className="flex items-start gap-6 mb-6">
                            {/* Institution Logo */}
                            <div className="institution-logo flex-shrink-0">
                              <div className="relative w-16 h-16 md:w-20 md:h-20">
                                <img
                                  src={education.icon}
                                  alt={`${education.institution} logo`}
                                  className="w-full h-full object-contain rounded-full bg-white/10 backdrop-blur-sm p-2 border border-white/20 group-hover:border-white/30 transition-colors duration-300"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                                {/* Enhanced Glowing Ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                              </div>
                            </div>

                            {/* Education Content */}
                            <div className="flex-1 min-w-0">
                              {/* Title & Duration */}
                              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white uppercase tracking-wide">
                                  {education.degree}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                  <span className="text-sm md:text-base text-blue-300 font-medium whitespace-nowrap">
                                    {education.duration}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Institution Name */}
                              <div className="text-lg md:text-xl text-white/90 mb-4 font-medium">
                                {education.institution}
                              </div>
                              
                              {/* Description */}
                              {education.description && (
                                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4">
                                  {education.description}
                                </p>
                              )}

                              {/* Enhanced Achievement Tags */}
                              <div className="flex flex-wrap gap-2 mt-4">
                                {education.institution.toLowerCase().includes('sliit') && (
                                  <>
                                    <span className="achievement-tag text-xs font-medium text-blue-200 bg-gradient-to-r from-blue-500/30 to-blue-600/30 px-4 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm hover:from-blue-500/40 hover:to-blue-600/40 transition-all duration-300">
                                      🎓 Current Studies
                                    </span>
                                    <span className="achievement-tag text-xs font-medium text-purple-200 bg-gradient-to-r from-purple-500/30 to-purple-600/30 px-4 py-2 rounded-full border border-purple-400/30 backdrop-blur-sm hover:from-purple-500/40 hover:to-purple-600/40 transition-all duration-300">
                                      💻 Software Engineering
                                    </span>
                                    <span className="achievement-tag text-xs font-medium text-cyan-200 bg-gradient-to-r from-cyan-500/30 to-cyan-600/30 px-4 py-2 rounded-full border border-cyan-400/30 backdrop-blur-sm hover:from-cyan-500/40 hover:to-cyan-600/40 transition-all duration-300">
                                      🚀 Specialization
                                    </span>
                                  </>
                                )}

                                {education.institution.toLowerCase().includes('maris stella') && (
                                  <>
                                    <span className="achievement-tag text-xs font-medium text-green-200 bg-gradient-to-r from-green-500/30 to-green-600/30 px-4 py-2 rounded-full border border-green-400/30 backdrop-blur-sm hover:from-green-500/40 hover:to-green-600/40 transition-all duration-300">
                                      ✅ Completed
                                    </span>
                                    <span className="achievement-tag text-xs font-medium text-yellow-200 bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm hover:from-yellow-500/40 hover:to-yellow-600/40 transition-all duration-300">
                                      📚 Advanced Level
                                    </span>
                                    <span className="achievement-tag text-xs font-medium text-orange-200 bg-gradient-to-r from-orange-500/30 to-orange-600/30 px-4 py-2 rounded-full border border-orange-400/30 backdrop-blur-sm hover:from-orange-500/40 hover:to-orange-600/40 transition-all duration-300">
                                      🎯 Foundation
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Progress Indicator */}
                          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                              <div className={`h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ${
                                education.institution.toLowerCase().includes('sliit') ? 'w-3/4' : 'w-full'
                              }`}></div>
                            </div>
                            <span className="text-xs text-white/60 font-medium">
                              {education.institution.toLowerCase().includes('sliit') ? 'In Progress' : 'Completed'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Updated Stats Section with Your Achievements */}
            <div className="stats-section mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  label: "Academic Excellence", 
                  value: "Dean's List", 
                  icon: "🏆",
                  gradient: "from-yellow-500/30 to-orange-500/30",
                  border: "border-yellow-400/30",
                  text: "text-yellow-200"
                },
                { 
                  label: "Continuous Learning", 
                  value: "22 Certifications", 
                  icon: "📜",
                  gradient: "from-blue-500/30 to-cyan-500/30",
                  border: "border-blue-400/30",
                  text: "text-blue-200"
                },
                { 
                  label: "Leadership Skills", 
                  value: "Hackathon 1st Runner-Up Team Leader", 
                  icon: "👑",
                  gradient: "from-purple-500/30 to-pink-500/30",
                  border: "border-purple-400/30",
                  text: "text-purple-200"
                },
                { 
                  label: "Technical Expertise", 
                  value: "Full-Stack Dev", 
                  icon: "💼",
                  gradient: "from-green-500/30 to-emerald-500/30",
                  border: "border-green-400/30",
                  text: "text-green-200"
                }
              ].map((stat, index) => (
                <div key={index} className="stats-box relative group">
                  {/* Background Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Main Stats Card */}
                  <div className={`relative backdrop-blur-sm bg-black/20 border ${stat.border} rounded-xl p-4 text-center group-hover:border-white/30 transition-all duration-300`}>
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className={`text-lg md:text-xl font-bold ${stat.text} mb-2 group-hover:text-white transition-colors duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <Marquee items={marqueeItems} className="text-white bg-transparent mt-10" />
    </section>
  );
};

export default Education;
