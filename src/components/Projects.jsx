import React from "react";
// import projects array
import data from "../projects";

const Projects = ({ delay }) => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 items-center">
            Projects
          </p>
          <p className="py-6">Check out some of the websites I've made</p>
        </div>
        {/* projects card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {data.map(({ id, name, src, link, repo }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg opacity-0 animate-fadeIn"
              style={{ animationDelay: `${delay}s` }}
            >
              <a href={link} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              <div className="flex justify-center mt-4">{name}</div>
              {/* buttons */}
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-4 mb-2 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noreferrer">
                    View Site
                  </a>
                </button>
                <span className="font-bold">|</span>
                <button className="w-1/2 px-6 py-4 mb-2 duration-200 hover:scale-105">
                  <a href={repo} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
