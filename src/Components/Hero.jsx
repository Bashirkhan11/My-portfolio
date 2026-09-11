const Hero = () => {
  return (
    <>
      <div id="Hero" className="w-full mt-20 py-8">
        <div className="flex flex-col w-full items-center  md:flex-row justify-center md:gap-10">
          <div className="w-full md:w-100 md:order-2 flex justify-center items-center">
            <img
              src="Bashir.jpeg"
              className="md:h-auto h-120 rounded-2xl shadow-2xl shadow-black  md:hover:-translate-y-3 md:hover:scale-[110%] transition-all duration-500 ease-in-out "
            />
          </div>

          <div className="mt-5 md:hover:-translate-x-5 md:hover:scale-[110%] transition-all duration-500 ease-in-out md:w-100  flex flex-col items-center gap-8 py-5 rounded-2xl bg-white md:bg-transparent">
            <h1 className="font-serif font-bold md:text-2xl  text-center">
              Hi! I Am Muhammad Bashir
            </h1>
            <h1 className="font-serif font-bold text-center">
              Front-End Developer!
            </h1>
            <p className="font-serif px-3">
              I’m a passionate Full-Stack Developer focused on building modern,
              responsive, and user-friendly web applications. I enjoy turning
              ideas into clean, functional, and engaging digital experiences.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}BashirCV.pdf`}
              alt="Muhammad Bashir"
              download
              className="bg-blue-200 w-40 h-10 font-bold font-serif rounded-2xl text-center pt-2 border "
            >
              Download CV
            </a>
            <a
              href="#Project"
              className="bg-blue-200 w-40 h-10 font-bold font-serif rounded-2xl text-center pt-2 border "
            >
              See Project!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
