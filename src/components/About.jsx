import React from "react";
// arrow icon
import { HiArrowRight } from "react-icons/hi";
// react scroll
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a <span className="font-bold">Frontend Web Developer</span> adept
          at building the Front-end of websites and web applications. Check out
          some of my work in the <span className="font-bold">Projects</span>{" "}
          section.
        </p>
        <br />
        <p className="text-xl whitespace-pre-line">
          I'm open to <span className="font-bold">Job</span> opportunities where
          I can contribute, learn and grow. If you have a good opportunity that
          matches my skills and experience then don't hesitate to contact me
        </p>
        <div>
          <Link
            to="contact"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Contact
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight size={20} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
