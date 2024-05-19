import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto">
        <div className="flex flex-col mt-7">
          <Link
            href="https://github.com/Data-JohnLee/Risk-Predict"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] mb-5">
            <div className="flex-row flex">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="Risk Predict"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Risk Predict</p>
                <p className="text-gray-500 text-[10px]">
                  To enhance the explainability of machine learning models,
                  in the context of financial risk prediction, We used financial datasets by FICO.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Data-JohnLee/Data-visualization-seoul-bike-share"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] mb-5">
            <div className="flex-row flex">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="Seoul Bike Sharing"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Seoul Bike Sharing</p>
                <p className="text-gray-500 text-[10px]">
                  Seoul Bike Sharing Demand Prediction using Machine Learning
                  algorithms and data visualization.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Data-JohnLee/Social-media-data-analysis"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]">
            <div className="flex-row flex">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="Social Media Data Analysis"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Social Media Data Analysis
                </p>
                <p className="text-gray-500 text-[10px]">
                  Analyzed social media data using Python and its libraries.
                  Taylor Swift's Youtube comment data was used for this project.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;