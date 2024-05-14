import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className=" text-white">
      <h2 className="font-semibold text-center text-6xl pt-5">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        On My Data Journey
      </p>

      {/* Experience Section 1 */}
      <div className="container mx-auto px-5 py-3 border border-gray-300 rounded-lg my-5 max-w-[600px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <Image
              src="/double.png"
              height={30}
              width={30}
              alt="Double Nine Group"
            />
            <p className="text-gray-200">
              <span className="font-semibold">Double Nine Group</span>
              <br></br>
              Data Analyst

            </p>
          </div>
          <p className="text-gray-200">
            Aug 2023 - Present, Melbourne, AUS
          <br></br>
          <br></br>
          </p>
        </div>

        <p className="text-gray-400">
          <br></br>
          <br></br>
          • Integrated complex accounting and sales datasets for in-depth analysis to derive actionable insights
          <br></br>
          <br></br>
          • Designed data visualizations using Power BI and Tableau to effectively communicate findings to cross-functional teams
          <br></br>
          <br></br>
          • Optimized data collection, integration, and analysis processes through workflow automation, enhancing data quality and reducing manual effort by 25%
          <br></br>
          <br></br>
          • Managed and ensured data integrity in the 'Xero' accounting system for streamlined financial reporting
          <br></br>
          <br></br>
          • Collaborated closely with business stakeholders to translate complex data into strategic recommendations aligned with organizational goals
          <br></br>
          <br></br>
          <p className="text-gray-200">
            * SKILLS: Python, SQL, Power BI, Tableau, Xero, Data Visualization
          </p>

        </p>
      </div>

      {/* Experience Section 2 */}
      <div className="container mx-auto px-5 py-3 border border-gray-400 rounded-lg my-5 max-w-[600px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <Image
              src="/renault.png"
              height={30}
              width={30}
              alt="Renault Group"
            />
            <p className="text-gray-200">
              <span className="font-semibold">Renault Group</span>
              <br></br> 
              Statistical Data Analyst <br></br>/ Project Leader
            </p>
          </div>
          <p className="text-gray-200">
            Jul 2014 - Nov 2022, Seoul, Korea
          <br></br>
          <br></br>
          </p>
        </div>

        <p className="text-gray-400">
          <br></br>
          <br></br>
          • Performed data mining of field incidents using statistical techniques like Weibull analysis and Pareto analysis
          <br></br>
          <br></br>
          • Analyzed incidents, monitored trends, prepared reports for continuous improvement, and presented findings to senior management
          <br></br>
          <br></br>
          • Skilled in Python, SQL, R, and data visualization for stakeholder communications
          <br></br>
          <br></br>
          • Managed and ensured data integrity for streamlined financial reporting
          <br></br>
          <br></br>
          • Proficient in Jupyter for data processing and analysis
          <br></br>
          <br></br>
          <p className="text-gray-200">
          * SKILLS: Python, SQL, R, MS Office, Weibull, Pareto, Power BI
          </p>
        </p>
      </div>
    </section>
  );
};

export default Experience;
