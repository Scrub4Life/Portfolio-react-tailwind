import React from "react";
// arrow icon
import { HiArrowRight } from "react-icons/hi";
// image
import HeroImage from "../assets/selfie.jpg";
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
          <p className="text-gray-500 py-4 max-w-md">
            A Web Developer focused on building the Frontend of Websites and Web
            Applications
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={20} className="ml-1" />
              </span>
            </Link>
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
