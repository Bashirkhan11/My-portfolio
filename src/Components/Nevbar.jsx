import { useState } from "react";

const Nevbar = () => {
  // {array of menu}
  const MenuItems = [
    {
      name: "Hero",
      path: "Hero",
    },
    {
      name: "About Me",
      path: "About",
    },
    {
      name: "Projects",
      path: "Project",
    },
    {
      name: "Contacts",
      path: "Contact",
    },
  ];

  // {useState hook}

  const [IsOpen, setIsOpen] = useState(false);

  // {function for onclick}

  const Menubotton = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <nav className="fixed z-50 bg-blue-200 w-full px-8 py-4 text-gray-900">
      <div className="flex justify-between items-center  tracking-tight">
        <div className="flex gap-1 text-2xl font-bold">
          <h1 className="h-10 w-11 bg-blue-400 text-white rounded-xl flex items-center  font-serif ">
            Mr.
          </h1>
          <h1>Bashir</h1>
        </div>

        <button onClick={Menubotton} className="md:hidden text-2xl">
          {IsOpen ? "✕" : "☰"}
        </button>

        {/* {Desktop Menu} */}

        <div className=" hidden md:block">
          <ul className="flex gap-10 items-end py-1 font-medium text-gray-700 font-sans text-2xl">
            {MenuItems.map((item, index) => (
              <a href={`#${item.path}`} key={index}>
                <li>{item.name}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>

      {/* {Mobile screen Menu} */}
      {IsOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-5 py-10 font-medium text-gray-700 text-xl">
            {MenuItems.map((item, index) => (
              <a href={`#${item.path}`} key={index}>
                <li>{item.name}</li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nevbar;
