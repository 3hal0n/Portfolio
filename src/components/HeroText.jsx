import { motion } from "motion/react";

const HeroText = () => {
  return (
    <div className="z-10 mt-20 md:mt-80 flex flex-col w-full">
      {/* Subtitle */}
      <motion.p
        className="text-xs md:text-sm tracking-widest uppercase text-neutral-500 mb-2 md:mb-4 ml-1 md:ml-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        Mission Control: All Clear
      </motion.p>
      {/* Name */}
      <motion.h1
        className="text-5xl md:text-8xl font-extrabold leading-none tracking-tight text-left text-black dark:text-white mb-2 md:mb-4 ml-1 md:ml-4"
        style={{ fontFamily: 'Funnel Display, sans-serif', letterSpacing: '-0.04em' }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        SHALON<br className="hidden md:block" /> FERNANDO
      </motion.h1>
      {/* Horizontal line */}
      <div className="w-full border-t border-neutral-300 dark:border-neutral-700 mb-4 md:mb-8 ml-1 md:ml-4" />
      {/* Description */}
      <motion.p
        className="text-xs md:text-base uppercase text-neutral-700 dark:text-neutral-300 text-right max-w-xl self-end mr-2 md:mr-8"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
      >
        Engineering smart, impactful digital solutions that fuel business growth and user engagement.
      </motion.p>
    </div>
  );
};

export default HeroText;
