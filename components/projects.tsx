import SectionHeading from "./section-heading";
import SectionHeading2 from "./section-heading2";
import Project from "./project";
import { projectsData, coursesData } from "../lib/data";

export default function Projects() {
  return (
    <section className="flex flex-col font-RB">
      <SectionHeading>Projects</SectionHeading>

      <div className="h-[22rem]">
        <SectionHeading2>
          <span className="underline-green">Full-Stack</span> Projects
        </SectionHeading2>

        <div className="flex h-[18rem] space-x-3.5 mt-4">
          {projectsData.map((project, index) => (
            <div key={index} className="flex-1 bg-slate-20">
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>

      <div className=" h-[22rem] pt-2">
        <SectionHeading2>
          <span className="underline-green">Course</span> Projects{" "}
        </SectionHeading2>

        <div className="flex h-[18rem] space-x-3.5 mt-4">
          {coursesData.map((project, index) => (
            <div key={index} className="flex-1 bg-slate-20">
              <Project {...project} />
            </div>
          ))}

          {projectsData.length > coursesData.length && (
            <div className="flex-1 bg-slate-20"></div>
          )}
        </div>
      </div>
    </section>
  );
}
