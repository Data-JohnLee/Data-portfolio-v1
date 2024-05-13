import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          Get To Know More
        </p>
        <p className="text-gray-300 text-center ">
        <br />
        A dedicated 'Data Analyst' deeply engaged in the fields of data science and machine learning. 
        With a strong foundation in business administration and data science, 
        I specialize in enhancing data-driven decisions and developing advanced analytical solutions.
          <br />
          <br />

        </p>
      </div>
    </section>
  );
};

export default About;
