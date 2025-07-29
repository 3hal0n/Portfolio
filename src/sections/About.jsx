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
        
        {/* Grid 2 - Resume & Summary */}
<div className="grid-default-color grid-2 flex flex-col items-center justify-center gap-6 py-8 px-6 md:px-12 rounded-lg shadow-lg bg-gradient-to-br from-indigo-900 to-indigo-800">
  <div className="flex flex-col md:flex-row items-center w-full max-w-3xl mx-auto gap-8 md:gap-12">
    <img
      src="assets/grid3.png"
      alt="Profile avatar"
      className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover shadow-xl border-4 border-indigo-700 bg-indigo-900 transition-transform duration-300 hover:scale-110"
    />
    <div className="flex flex-col items-center md:items-start w-full text-center md:text-left space-y-4">
      <a
        href="/assets/Shalon_Fernando_Resume.pdf"
        download="Shalon_Fernando_Resume.pdf"
        className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-semibold text-white text-base bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 shadow-lg border border-indigo-700 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-indigo-400/60 active:scale-95 transition-transform duration-150 cursor-pointer"
        aria-label="Download Shalon Fernando's Resume"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"
          />
        </svg>
        Download Resume
      </a>

      <h3 className="text-xl font-semibold text-white">
        Driven by Curiosity, Growth, and Impact
      </h3>

      <p className="text-indigo-200 max-w-md text-sm sm:text-base leading-relaxed">
        I love solving problems and building things through code.
        Programming isn&apos;t just my profession — it&apos;s my passion.
        I enjoy exploring new technologies and enhancing my skills.
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
