import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
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
              Over the past two years, I’ve developed strong software engineering skills across both frontend and backend development, 
              enabling me to build dynamic and scalable software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 - Resume & Summary */}
        <div className="grid-default-color grid-2 flex flex-col items-center justify-center gap-4 py-6 px-4">
          <div className="flex flex-col md:flex-row items-center w-full max-w-2xl mx-auto gap-4 md:gap-10">
            <img 
              src="assets/grid3.png" 
              alt="grid-3" 
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-contain mb-4 md:mb-0 shadow-lg border border-indigo-900 bg-indigo-950/30 transition-transform duration-200 hover:scale-105 hover:shadow-2xl mx-auto md:mx-0" 
            />
            <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
              <button
                className="w-40 sm:w-56 mb-6 mt-4 flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-white text-xs sm:text-base bg-gradient-to-r from-[#3A3A3A] via-[#242424] to-[#3A3A3A] shadow-lg border-2 border-neutral-800/80 opacity-90 cursor-not-allowed transition-all duration-200
                hover:scale-105 hover:shadow-2xl hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 active:scale-95"
                disabled
              >
                <span className="inline-block w-5 h-5 align-middle">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10" />
                  </svg>
                </span>
                Download Resume(Coming Soon)
              </button>
              {/* Divider */}
              <div className="w-24 h-[2px] bg-gradient-to-r from-indigo-400 via-indigo-700 to-storm my-4 opacity-60 rounded-full mx-auto md:mx-0" />
              <p className="headtext mt-2 mb-4 text-lg sm:text-xl">Driven by Curiosity, Growth, and Impact</p>
              <p className="subtext max-w-xs sm:max-w-md mb-4 mx-auto text-sm sm:text-base leading-relaxed">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies and enhancing my skills.
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
