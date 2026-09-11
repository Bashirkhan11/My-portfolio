import { useState } from "react";
import projectdata from "./project data/projectdata";
import Projectimages from "./project data/Projectimages";

const Projects = () => {
  return (
    <>
      <div
        id="Project"
        className="w-full  grid place-items-center grid-cols-1 my-5 md:px-10 md:grid-cols-2 gap-8 items-stretch"
      >
        {projectdata.map((project, index) => (
          <Projectimages
            image={project.image}
            project={project}
            index={index}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
