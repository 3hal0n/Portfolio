import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing relative" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Shalon Fernando</p>
            <p className="subtext">
              Im a 3rd year 1st semester undergraduate at SLIIT. Over the past
              two years, I’ve developed strong software engineering skills
              across both frontend and backend development, enabling me to build
              dynamic and scalable software and web applications. In my free
              time i participate in hackathons and coding competitions, where I
              enjoy solving complex problems and collaborating with others.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        
        {/* Grid 2 - Resume Download Only - Fully Responsive */}
<div className="grid-default-color grid-2 flex flex-col md:flex-row items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 rounded-lg shadow-lg bg-gradient-to-br from-indigo-900 to-indigo-800 relative overflow-hidden">
  
  {/* Responsive Content Container */}
  <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto gap-4 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-12">
    
    {/* Profile Image - Progressive Sizing */}
    <div className="flex-shrink-0 order-1">
      <img
        src="assets/grid3.png"
        alt="Profile avatar"
        className="w-20 h-20 xs:w-22 xs:h-22 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full object-cover shadow-xl border-2 sm:border-3 md:border-4 border-indigo-700 bg-indigo-900 transition-transform duration-300 hover:scale-110 mx-auto md:mx-0"
      />
    </div>
    
    {/* Content Container - Resume Focus */}
    <div className="flex flex-col items-center md:items-start w-full md:flex-1 text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 order-2">
      
      {/* Main Heading */}
      <h3 className="font-semibold text-white leading-tight text-lg xs:text-xl sm:text-xl md:text-xl lg:text-4xl xl:text-xl max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-md lg:max-w-lg xl:max-w-xl">
        My Resume
      </h3>
      
      {/* Download Resume Button - Featured */}
      <div className="w-full flex justify-center md:justify-start">
        <a
          href="/assets/ShalonFernando_Resume.pdf"
          download="ShalonFernando_Resume.pdf"
          className="inline-flex items-center justify-center gap-3 sm:gap-4 md:gap-4 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 sm:py-4 md:py-4 lg:py-5 rounded-full font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 shadow-xl border border-indigo-700 hover:brightness-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-400/60 active:scale-95 transition-all duration-200 cursor-pointer max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-none whitespace-nowrap"
          aria-label="Download Shalon Fernando's Resume"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex-shrink-0"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"
            />
          </svg>
          <span className="font-bold">
            Download Resume
          </span>
        </a>
      </div>

      {/* Simple Subtitle */}
      <p className="text-indigo-200 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[260px] sm:max-w-[320px] md:max-w-md lg:max-w-lg xl:max-w-xl font-medium">
        View my professional experience and skills
      </p>
    </div>
  </div>
</div>



        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Miller's planet(Negombo, Sri Lanka), and open to work
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
