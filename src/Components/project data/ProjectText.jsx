import React, { useState } from "react";

const ProjectText = ({ project }) => {
  const [showMore, setshowMore] = useState(false);

  return (
    <>
      <div className="flex flex-col  gap-4 mt5">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold mb-3 mt-10">
            {project.Name}
          </h1>
          <p className="text-lg font-serif 2xl:text-xl leading-7">
            {showMore
              ? project.description
              : project.description.slice(0, 200) + "..."}
          </p>

          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              {showMore ? "Technology & Tools" : " "}
            </h1>
            {project.technology.map((tech, index) => (
              <p key={index} className="text-lg font-serif xl:text-2xl">
                {showMore ? tech : " "}
              </p>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setshowMore(!showMore);
          }}
          className={`text-lg border-blue-300 text-gray-700 md:mx-5 cursor-pointer hover:underline hover:underline-offset-4`}
        >
          {showMore ? "Show Less " : "Show More"}
        </button>
      </div>
    </>
  );
};

export default ProjectText;
