import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div
        id="Contact"
        className="w-full mb-5 md:px-10 md:py-5 flex justify-center items-center"
      >
        <div
          data-aos="zoom-in"
          className="w-full h-full shadow-2xl shadow-black rounded-2xl  bg-white grid md:grid-cols-2 2xl:gap-10 gap-5 px-10 py-5"
        >
          <div className="flex gap-4 items-center justify-centers">
            <a href="tel:97471219726">
              <FaPhoneSquareAlt className="md:text-4xl 2xl:text-5xl text-3xl hover:scale-150 duration-1000 ease-in-out" />
            </a>
            <a
              href="tel:97471219726"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-lg font-bold hover:text-blue-400 md:hover:text-2xl hover:text-lg transition-all duration-1000 ease-in-out"
            >
              +97471219726
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <a href="mailto:bashirkhan080801@gmail.com">
              <MdAttachEmail className="md:text-4xl 2xl:text-5xl text-3xl hover:scale-150 duration-1000 ease-in-out" />
            </a>
            <a
              href="mailto:bashirkhan080801@gmail.com"
              className="2xl:text-lg font-bold flex hover:text-blue-400 hover:underline md:hover:text-2xl  hover:text-lg transition-all duration-1000 ease-in-out"
            >
              bashirkhan080801@gmail.com
              <ArrowUpRight />
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <FaWhatsappSquare className="md:text-4xl 2xl:text-5xl text-3xl hover:scale-150 duration-1000 ease-in-out" />
            <a
              href="https://wa.me/97471219726"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-lg font-bold hover:text-blue-400 md:hover:text-2xl hover:text-lg transition-all duration-1000 ease-in-out"
            >
              +97471219726
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <FaLinkedin className="md:text-4xl 2xl:text-5xl text-3xl hover:scale-150 duration-1000 ease-in-out" />
            <a
              href="https://www.linkedin.com/in/muhammad-bashir888"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-lg font-bold hover:text-blue-400 hover:underline md:hover:text-2xl hover:text-lg transition-all duration-1000 ease-in-out"
            >
              Muhammad Bashir
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <FaGithubSquare className="md:text-4xl 2xl:text-5xl text-3xl duration-1000 ease-in-out hover:scale-150" />
            <a
              href="https://github.com/Bashirkhan11"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:text-lg font-bold hover:text-blue-400 hover:underline md:hover:text-2xl hover:text-lg transition-all duration-1000 ease-in-out"
            >
              Bashir11
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
