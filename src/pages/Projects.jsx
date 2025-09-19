import React, { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [count, setCount] = useState(9);
  const visible = projects.slice(0, count);

  return (
    <main className="pt-28 px-4 max-w-6xl mx-auto pb-20">
      <section className="mb-6 text-center pb-5">
        <h1 className="text-3xl font-bold pb-5">Projects</h1>
        <p className="text-slate-600 text-lg">
  Explore a curated collection of projects demonstrating my skills and expertise.
</p>

      </section>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(p => <ProjectCard key={p.id} project={p} />)}
      </section>

      <div className="mt-8 flex justify-center">
        {count < projects.length ? (
          <button onClick={() => setCount(c => Math.min(projects.length, c + 7))}
            className="px-6 py-2 
             bg-gradient-to-r from-blue-500 to-purple-800 
             text-white rounded-xl shadow text-2xl
             cursor-pointer 
             hover:from-blue-600 hover:to-purple-1200 
             transition-all duration-300" >
            Show more
          </button>
        ) : (
          <p className="text-slate-600"> </p>
        )}
      </div>
    </main>
  );
};

export default Projects;
