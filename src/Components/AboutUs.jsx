import React from "react";

const aboutus = [
  {
    name: "About Us",
    description: [
      {
        descname: "",
        descdescription:
          " Hi, I'm Bashir, a frontend developer from Pakistan, currently based in Qatar. I hold a Bachelor's degree from Islamia College University Peshawar, Pakistan, where I built a strong foundation in software development and web technologies. I have more than 2 years of professional experience building responsive and user-friendly web interfaces using React and modern frontend technologies. I enjoyturning ideas and designs into clean, functional, and engaging webexperiences.",
      },
    ],
  },
  {
    name: "🎓 Education!",
    description: [
      {
        descname: "Bachelor of Science in Software Engineering",
        descdescription: "Islamia College University, Peshawar, Pakistan",
      },
      {
        descname: "Graduated:",
        descdescription: "May 2023",
      },
      {
        descname: "Final Year Project:",
        descdescription: "Complaint Management System",
      },
      {
        descname: "Technology:",
        descdescription: "MERN Stack",
      },
    ],
  },
  {
    name: "Skills & Experience",
    description: [
      {
        descname: "",
        descdescription:
          "With 2+ years of professional frontend experience, I have developed responsive and user-friendly web interfaces using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. I focus on writingclean, maintainable code and creating modern web experiences that work smoothly across different devices.",
      },
    ],
  },
  {
    name: "Services!",
    description: [
      {
        descname: "",
        descdescription:
          "  I create modern and responsive web interfaces using React,JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap, with a focus on clean design and user-friendly experiences.",
      },
    ],
  },
];

const AboutUs = () => {
  return (
    <>
      <div
        id="About"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:px-10 mb-5"
      >
        {aboutus.map((item, index) => {
          return (
            <div
              data-aos="zoom-in"
              key={index}
              className={`w-full  h-full shadow-2xl shadow-black flex flex-col gap-4  px-5 py-8 font-serif bg-white rounded-2xl`}
            >
              <h1 className="text-2xl md:text-3xl font-bold">{item.name}</h1>
              {item.description.map((item, index) => {
                return (
                  <div key={index}>
                    <h2 className="font-bold md:text-2xl">{item.descname}</h2>
                    <p className="md:text-lg font-serif">
                      {item.descdescription}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutUs;
