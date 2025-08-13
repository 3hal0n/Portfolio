import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { reviews } from "../constants";
import { Particles } from "../components/Particles";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  const text = `Voices from across the digital universe, sharing their stellar experiences and cosmic collaboration stories.`;

  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden py-20" id="testimonials">
      {/* Space-themed Background Elements - Consistent with Contact Section */}
      <div className="absolute inset-0 -z-50">
        <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="items-start c-space">
        <AnimatedHeaderSection
          subTitle={"Stellar Feedback from the Galaxy"}
          title={"Client Testimonials"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        
        <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-black"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-black"></div>
        </div>

        {/* Call to Action - Linked to Contact Section */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur opacity-50"></div>
            <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-8 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Join the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Success Stories</span>?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Let's create something amazing together and add your voice to this stellar collection of testimonials.
              </p>
              <button 
                onClick={handleStartProject}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
