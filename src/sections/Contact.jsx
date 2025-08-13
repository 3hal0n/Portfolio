import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Particles } from "../components/Particles";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { mySocials } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();
  const [emailCopied, setEmailCopied] = useState(false);

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
    // Animate contact cards with staggered entrance
    gsap.from(".contact-card", {
      y: 80,
      opacity: 0,
      delay: 0.3,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
    });
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('shalonfernando52@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (err) {
      console.log('Failed to copy email');
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative flex flex-col justify-between min-h-screen bg-black overflow-hidden"
    >
      {/* Space-themed Background Elements */}
      <Particles className="absolute inset-0 -z-50" quantity={150} ease={60} color="#ffffff" refresh />
      
      <div className="absolute inset-0 -z-40">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="flex-1 c-space py-20">
        {/* Header Section */}
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code It"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        
        <div className="contact-container grid lg:grid-cols-1 gap-12 px-4 md:px-10 mt-16">
          {/* Contact Information Cards */}
          <div className="flex flex-col gap-10 font-light text-white">
            
            {/* Email Card */}
            <div className="contact-card relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-400/30">
                    <Icon icon="lucide:mail" className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wider">E-mail</h2>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4" />
                <div className="flex items-center gap-4">
                  <a 
                    href="mailto:shalonfernando52@gmail.com"
                    className="text-lg md:text-xl lg:text-2xl tracking-wide lowercase hover:text-blue-400 transition-colors duration-300 flex-1"
                  >
                    shalonfernando52@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${
                      emailCopied 
                        ? 'border-green-400/50 text-green-400 bg-green-500/10' 
                        : 'border-blue-400/50 text-blue-400 hover:bg-blue-500/10'
                    }`}
                  >
                    {emailCopied ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="contact-card relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                    <Icon icon="lucide:map-pin" className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wider">Location</h2>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4" />
                <p className="text-lg md:text-xl lg:text-2xl lowercase tracking-wide">
                  Negombo, Sri Lanka
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
            
            {/* Social Media Card */}
            <div className="contact-card relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-400/30">
                    <Icon icon="lucide:users" className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wider">Social Media</h2>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
                <div className="flex flex-wrap gap-4">
                  {mySocials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-purple-400/50 bg-white/5 hover:bg-purple-500/10 transition-all duration-300"
                      aria-label={`Connect on ${social.name}`}
                    >
                      <img 
                        src={social.icon} 
                        alt={`${social.name} icon`} 
                        className="w-6 h-6 opacity-70 group-hover/social:opacity-100 transition-opacity duration-300" 
                      />
                      <span className="text-sm font-medium uppercase tracking-wider opacity-70 group-hover/social:opacity-100 group-hover/social:text-purple-300 transition-all duration-300">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Marquee */}
      <Marquee 
        items={marqueeItems} 
        className="text-white bg-transparent border-t border-purple-500/20 mt-20" 
      />
    </section>
  );
};

export default Contact;
