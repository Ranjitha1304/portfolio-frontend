import React, { useState, useEffect, useRef } from "react";
import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";
import MiniProjectCard from "../components/MiniProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  const [selected, setSelected] = useState(null);
  const projectsRef = useRef(null); // ref for selected projects

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Scroll into view when selected changes
  useEffect(() => {
    if (selected && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected]);

  return (
    <main className="pt-28 pb-20">
      {/* Education Section */}
      <section className="education-section mb-16 px-4 max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-slate-800 mb-12 text-center border-y border-slate-300 py-4 tracking-widest"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          EDUCATION
        </h2>

        <div className="timeline relative space-y-12">
          {/* Entry 1 */}
          <div className="timeline-entry flex items-start relative">
            <div
              className="timeline-left w-2/5 text-right pr-6"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h4 className="text-lg font-semibold">2016</h4>
              <p className="text-slate-600 text-sm">PGDBO</p>
            </div>

            <div className="timeline-center flex flex-col items-center relative mt-2">
              <span
                className="dot w-3 h-3 bg-black rounded-full z-10"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="500"
              ></span>
              <span className="line w-[2px] flex-1 bg-slate-300"></span>
            </div>

            <div
              className="timeline-right w-2/5 text-left pl-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <h4 className="text-lg font-semibold">NIIT</h4>
              <p className="text-slate-600 text-sm">
                Completed Post Graduate Diploma in Banking and Operations in 2016 with 80%.
              </p>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="timeline-entry flex items-start relative">
            <div
              className="timeline-left w-2/5 text-right pr-6"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h4 className="text-lg font-semibold">2014 - 2016</h4>
              <p className="text-slate-600 text-sm">Master's Degree</p>
            </div>

            <div className="timeline-center flex flex-col items-center relative mt-2">
              <span
                className="dot w-3 h-3 bg-black rounded-full z-10"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="500"
              ></span>
              <span className="line w-[2px] flex-1 bg-slate-300"></span>
            </div>

            <div
              className="timeline-right w-2/5 text-left pl-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <h4 className="text-lg font-semibold">ANNA UNIVERSITY</h4>
              <p className="text-slate-600 text-sm">
                Completed M.C.A (Computer Application) in 2016 with 80%.
              </p>
            </div>
          </div>

          {/* Entry 3 */}
          <div className="timeline-entry flex items-start relative">
            <div
              className="timeline-left w-2/5 text-right pr-6"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h4 className="text-lg font-semibold">2011 - 2014</h4>
              <p className="text-slate-600 text-sm">Bachelor's Degree</p>
            </div>

            <div className="timeline-center flex flex-col items-center relative">
              <span
                className="dot w-3 h-3 bg-black rounded-full z-10 mt-2"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="500"
              ></span>
              <span className="line w-[2px] flex-1 bg-slate-300"></span>
            </div>

            <div
              className="timeline-right w-2/5 text-left pl-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <h4 className="text-lg font-semibold">THIRUVALLUVAR UNIVERSITY</h4>
              <p className="text-slate-600 text-sm">
                Completed B.Sc (Computer Science) in 2014 with 79%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/assets/bluebg4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 text-center">
          <h2
            className="text-4xl font-extrabold tracking-widest px-6 py-4 border-y border-white inline-block bg-gray-600/50 backdrop-blur-sm"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            PROFESSIONAL SKILLSET
          </h2>

          <p
            className="text-slate-200 mt-6 text-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Click a skill to view relevant projects.
          </p>

          {/* Skills grid */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {skills.map((s, i) => (
              <div
                key={s.key}
                data-aos={s.animation || "flip-left"}
                data-aos-delay={s.delay || i * 200}
                data-aos-duration={s.duration || 1200}
                className="min-w-[220px]"
              >
                <SkillCard
                  name={s.name}
                  projects={s.projects}
                  disabled={s.key === "docker"}
                  onClick={() =>
                    setSelected(s.key === selected ? null : s.key)
                  }
                  className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-xl 
                             text-white font-semibold text-xl cursor-pointer 
                             shadow-md hover:shadow-xl hover:border border-white/40
                             transition text-center tracking-wide"
                />
              </div>
            ))}
          </div>

          {/* Selected skill projects */}
          {selected && (
            <div
              ref={projectsRef} // added ref for scrolling
              className="mt-12 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-4xl mx-auto"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h3 className="font-semibold text-white text-xl mb-4">
                {skills.find((s) => s.key === selected).name} — Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills
                  .find((s) => s.key === selected)
                  .projects.map((p, i) => (
                    <MiniProjectCard key={i} title={p} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Resume;
