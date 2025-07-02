import { useState, useEffect } from 'react';
import { myEducation } from '../constants';
import { Particles } from '../components/Particles';

const Education = () => {
  const [current, setCurrent] = useState(0);
  const total = myEducation.length;

  // Auto-advance the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const edu = myEducation[current];

  return (
    <section className="relative w-full py-16 flex flex-col items-center overflow-hidden">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight z-10">Education & Certifications</h2>
      <div className="relative w-full max-w-2xl flex flex-col items-center bg-primary/80 rounded-2xl shadow-lg p-8 z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center w-24 h-24 bg-white/10 rounded-full justify-center">
            <img src={edu.logo} alt={edu.issuer} className="w-16 h-16 object-contain" />
          </div>
          {/* Details */}
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-lavender">{edu.name}</h3>
            <div className="text-neutral-300 text-sm flex flex-wrap gap-2 items-center">
              <span>{edu.issuer}</span>
              <span className="mx-1">•</span>
              <span>Issued {edu.issueDate}</span>
            </div>
            <div className="text-neutral-400 text-xs">Credential ID: {edu.credentialId}</div>
            {edu.skills && edu.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.skills.map((skill, i) => (
                  <span key={i} className="bg-navy/60 text-xs text-white px-2 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            )}
            <div className="mt-3">
              <a
                href={edu.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-lavender text-navy font-medium rounded-lg shadow hover:bg-royal transition"
              >
                Show credential
              </a>
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <div className="flex justify-between items-center w-full mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-navy text-white hover:bg-lavender transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="text-neutral-400 text-sm">
            {current + 1} / {total}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full bg-navy text-white hover:bg-lavender transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Education; 