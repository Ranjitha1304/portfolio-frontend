import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] 
                 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] overflow-hidden transform transition 
                 hover:-translate-y-2 hover:border-2 hover:border-black-400 flex flex-col"
    >
      {/* Image */}
      <div className="h-44 md:h-52 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-slate-800">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 mt-1">Role: {project.role}</p>
        <p className="text-sm text-slate-700 mt-2">{project.description}</p>

        {/* Tech stack tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom button row */}
        <div className="mt-auto flex flex-col items-center pt-5">
          <a
            href={project.link || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-5 py-2 text-white font-medium rounded-xl cursor-pointer 
                       bg-gradient-to-r from-indigo-500 to-pink-500 
                       hover:from-indigo-600 hover:to-pink-600 
                       transition-all duration-300 shadow-md hover:shadow-xl"
            onClick={(e) => {
              if (!project.link) {
                e.preventDefault();
              }
            }}
          >
            {project.link ? "View Project" : "No link"}
          </a>
          <span className="text-xs text-slate-500 mt-2">
            {project.year || ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
