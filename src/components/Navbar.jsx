import React, { useState } from "react";
// react icons
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ NavLink }) => {
  // states
  const [nav, setNav] = useState(false);

  // array of navbar links
  const linksList = [
    { id: 1, link: "Home" },
    // { id: 2, link: "About" },
    { id: 2, link: "Skills" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-24 text-white bg-black fixed">
      <h1 className="text-5xl font-signature ml-2 cursor-pointer">
        <NavLink to="home">Avery Blake</NavLink>
      </h1>
      {/* list of links */}
      <ul className="hidden md:flex">
        {/* mapping over the navbar links array so they all that the same styles */}
        {linksList.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200
            
            `}
          >
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive ? " border-b-4" : "text-white"
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* ***************MOBLIE VIEW*************** */}
      {/* nav icon accordian */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* mobile navbar */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {/* mapping over the navbar links array so they all that the same styles */}
          {linksList.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
      
              <NavLink onClick={() => setNav(!nav)} to={link}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
