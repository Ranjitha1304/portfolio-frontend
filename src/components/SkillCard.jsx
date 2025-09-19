import React from "react";

const SkillCard = ({ name, projects, onClick, disabled=false, animation, delay, duration }) => {
  return (
    <div
      data-aos={animation}      // animation type
      data-aos-delay={delay}    // optional delay in ms
      data-aos-duration={duration}

      className={
        `p-4 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm cursor-pointer transition transform hover:-translate-y-1 ` +
        (disabled ? "opacity-60 cursor-not-allowed" : "")
      }
      onClick={() => { if(!disabled) onClick(); }}
    >
      <h4 className="font-semibold text-lg text-slate-800">{name}</h4>
      <p className="text-sm text-slate-600 mt-2">{projects.length} projects</p>
    </div>
  );
};

export default SkillCard;
