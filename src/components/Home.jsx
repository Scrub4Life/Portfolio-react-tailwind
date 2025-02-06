import React from "react";
// arrow icon
import { HiArrowRight } from "react-icons/hi";
// image
import HeroImage from "../assets/selfie.jpg";
import { NavLink } from "react-router-dom";

// react scroll
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Hello, I'm Avery Blake
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            A <span className="font-bold">Web Developer </span> focused on
            building the Frontend of Websites and Web Applications.
            <br />
            <br />
            I'm open to <span className="font-bold">Job opportunities </span>
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p>
          <div>
            <NavLink
              to="/projects"
              className="group text-white text-xl font-extrabold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={20} className="ml-1" />
              </span>
            </NavLink>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl xs:h-[24rem] xs:w-[24rem] lg:h-[32rem] lg:w-[32rem] mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
