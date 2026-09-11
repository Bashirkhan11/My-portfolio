import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ProjectText from "./ProjectText";

const Projectimages = ({ image, project, index }) => {
  const [currentImage, setcurrentImage] = useState(0);
  const [fullScreen, setfullScreen] = useState(false);

  const nextbutton = () => {
    setcurrentImage((currentImage + 1) % image.length);
  };

  const previousebutton = () => {
    setcurrentImage((currentImage - 1 + image.length) % image.length);
  };

  return (
    <>
      <div
        data-aos="zoom-in"
        className={`group md:w-full h-full px-5 py-8 rounded-2xl bg-white shadow-2xl shadow-black`}
      >
        <div
          className={`border-4 relative  rounded-2xl border-blue-100  w-full h-64 flex flex-col  items-center  bg-cover bg-center cursor-pointer`}
        >
          <img
            src={`${import.meta.env.BASE_URL}${image[currentImage]}`}
            className=" max-h-full cursor-pointer rounded-t-2xl order-2"
            alt=""
          />
          <div
            className={`absolute inset-0 transition-opacit duration-300 md:opacity-0 ${image.length > 1 ? "group-hover:opacity-100" : ""}  w-full flex justify-between items-center px-2 order-2`}
          >
            <ArrowLeft
              className="flex active:text-black active:bg-white items-center justify-center  order-1 w-10 h-10 text-white text-2xl  bg-blue-400 rounded-full "
              onClick={previousebutton}
            />
            <ArrowRight
              onClick={nextbutton}
              className="flex active:text-black active:bg-white items-center justify-center  order-2 w-10 h-10 text-white text-2xl  bg-blue-400 rounded-full "
            />
          </div>
        </div>
        <button
          onClick={() => {
            setfullScreen(!fullScreen);
          }}
          className="bg-red-500 text-white hover:bg-blue-300 hover:text-black active:bg-blue-100 active:border-black active:border-2 active:text-black font-bold rounded-full py-2 mt-5 cursor-pointer px-4"
        >
          See Full Image!
        </button>
        <ProjectText project={project} />
      </div>

      {/* full screen images */}

      {fullScreen ? (
        <div
          className={`fixed inset-0 z-50 flex  justify-center items-center bg-black cursor-pointer`}
        >
          <ArrowLeft
            className="fixed active:text-black active:bg-white left-5 top-1/2 z-50 p-2 flex items-center justify-center  order-1  w-10 h-10 text-white text-2xl  bg-blue-400 rounded-full "
            onClick={previousebutton}
          />
          <img
            onClick={() => {
              setfullScreen(!fullScreen);
            }}
            className="max-w-[90vw] max-h-[90vh] object-contain cursor-pointer"
            src={`${import.meta.env.BASE_URL}${image[currentImage]}`}
            alt={`${project.Name} Screenshot ${currentImage + 1}`}
          />
          <ArrowRight
            onClick={nextbutton}
            className="fixed active:text-black active:bg-white right-5 top-1/2 z-50 p-2 flex items-center justify-center  order-3 w-10 h-10 text-white text-2xl  bg-blue-400 rounded-full "
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Projectimages;
