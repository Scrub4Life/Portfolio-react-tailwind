import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
          quibusdam dolores iusto optio sapiente unde? Aut ipsa fugit dolores
          iure deleniti quae quibusdam, facere eveniet sequi repudiandae odit ut
          maiores aperiam libero soluta perferendis consequatur ratione? Tenetur
          vero enim necessitatibus praesentium quisquam unde quas modi nobis
          autem. Similique, corrupti.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nulla
          cumque ex quod soluta? Laboriosam, ipsum quod odit aliquam, incidunt
          sint impedit temporibus ab quaerat dolorem molestiae? Totam
          reprehenderit sed illum doloribus veniam ut similique quod numquam
          nisi cumque. Repudiandae dolorem odit repellendus voluptas quibusdam
          eius optio quod fugiat culpa!
        </p>
      </div>
    </div>
  );
};

export default About;
