import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        on My Data Journey
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/double.png"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Double Nine Group /</span> Data Analyst
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Aug 2023 - Present, Melbourne, Australia
          </p>
        </div>

        <p className="text-gray-300 pt-5">
        • Integrated complex accounting and sales datasets for in-
          depth analysis to derive actionable insights
          <br />
          <br />
        • Designed data visualizations using Power BI and Tableau to
          effectively communicate findings to cross-functional teams
          <br />
          <br />
        • Optimized data collection, integration, and analysis
          processes through workflow automation, enhancing data
          quality and reducing manual effort by 25%
          <br />
          <br />
        • Managed and ensured data integrity in the 'Xero' accounting
          system for streamlined financial reporting
          <br />
          <br />
        • Collaborated closely with business stakeholders to translate
          complex data into strategic recommendations aligned with
          organizational goals
          <br />
          <br />
        </p>
        
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Statistical Analysis
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Data Wrangling
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Natural Language Processing
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Project Management
          </div>
        </div>
      </div>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/renault.png"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Renault Group/</span> Statistical Data Analyst
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Jul 2014 - Nov 2022, Seoul, Korea
          </p>
        </div>

        <p className="text-gray-300 pt-5">
        • Performed data mining of field incidents using statistical
          techniques like Weibull analysis and Pareto analysis
          <br />
          <br />
        • Analyzed incidents, monitored trends, prepared reports for
          continuous improvement, and presented findings to senior.
          <br />
          <br />
        • Skilled in Python, SQL, R and Data Visualization for
          stakeholder communications
          <br />
          <br />
        • Managed and ensured data integrity in the 'Xero' accounting
          system for streamlined financial reporting
          <br />
          <br />
        • Proficient in Microsoft Office for data processing and
          analysis
          <br />
          <br />
        </p>

        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Data Analysis
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Data Visualization (Power BI, Tableau)
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Python
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Postgresql
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;
