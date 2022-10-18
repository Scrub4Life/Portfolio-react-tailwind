import React, { useState } from "react";

// react icons
import { FaBars, FaTimes } from "react-icons/fa";
// smooth scroll
import { Link } from "react-scroll";

const Navbar = () => {
  // states
  const [nav, setNav] = useState(false);

  // array of navbar links
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <h1 className="text-5xl font-signature ml-2">Avery Blake</h1>

      <ul className="hidden md:flex">
        {/* mapping over the navbar links array so they all that the same styles */}
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {/* link with react smooth scroll */}
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

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
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {/* link with react smooth scroll */}
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={800}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
