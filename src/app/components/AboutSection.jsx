"use client";
import Image from "next/image";
import React, { useState, useTransition, useEffect, useRef } from "react";
import Tabbutton from "./Tabbutton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Skill data with percentages
  const SKILLS = useRef([
    { name: "Node.js", percentage: 85 },
    { name: "Django", percentage: 65 },
    { name: "MERN Stack", percentage: 90 },
    { name: "Next.js", percentage: 75 },
    { name: "Tailwind CSS", percentage: 82 },
    { name: "MySQL", percentage: 85 },
  ]);

  const [animatedPercentage, setAnimatedPercentage] = useState(
    SKILLS.current.map(() => 0) // Initialize all skill percentages to 0
  );

  // Animate skill bar percentages
  useEffect(() => {
    const intervals = SKILLS.current.map((skill, index) => {
      let startPercentage = 0;
      return setInterval(() => {
        startPercentage += 1;
        setAnimatedPercentage((prev) => {
          const newPercentages = [...prev];
          if (startPercentage <= skill.percentage) {
            newPercentages[index] = startPercentage;
          }
          return newPercentages;
        });
      }, 10); // Adjust speed (10ms per increment)
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="grid grid-cols-2 gap-4 animate-fadeIn">
          {SKILLS.current.map((skill, index) => (
            <div key={skill.name} className="p-4">
              <div className="relative w-full h-6 bg-gray-800 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-purple-600 rounded-full"
                  style={{
                    width: `${animatedPercentage[index]}%`,
                    transition: "width 0.5s ease-in-out",
                  }}
                ></div>
                <span className="absolute text-sm font-medium text-white transform -translate-y-1/2 left-2 top-1/2">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="pl-4 space-y-2 list-disc animate-fadeIn">
          <li>Mangalore Institute of Technology and Engineering - B.E [CSE] (CGPA: 9.325)</li>
          <li>Vidyodaya PU College - 12th (94%)</li>
          <li>Shri Anantheswara High School - 10th (88%)</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="pl-2 space-y-2 list-disc animate-fadeIn">
          <li>
            MERN: Advanced MERN Development - (Infosys){" "}
            <a
              href="/mern stack.pdf"
              download={"Infosys MERN certificate"}
              className="font-extrabold text-blue-600"
            >
              : Download certificate
            </a>
          </li>
          <li>
            Backend Development using JS and Node.js - (Microsoft Learn Student Ambassador){" "}
            <a
              href="node js-microsoft"
              download={"nodejs bootcamp certificate"}
              className="font-extrabold text-blue-600"
            >
              : Download certificate
            </a>
          </li>
          <li>
            Wipro TalentNext Java Full Stack Development{" "}
            <a
              href="/Wipro TalentNext  Java Full Stack Certification.pdf.pdf"
              download={"Wipro Java Full Stack certificate"}
              className="font-extrabold text-blue-600"
            >
              : Download certificate
            </a>
          </li>
          <li>
            Machine Learning A-Z (SAS){" "}
            <a
              href="4.pdf"
              download={"Sas certificate"}
              className="font-extrabold text-blue-600"
            >
              : Download Certificate
            </a>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="flex h-full text-white">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative overflow-hidden rounded-lg shadow-lg animate-fadeIn">
          <Image
            src={"/images/dp.jpg"}
            width={400}
            height={400}
            alt="About Image"
            className="transition-transform duration-500 transform hover:scale-105"
          />
        </div>
        <div className="flex flex-col h-full mt-0 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white animate-slideInLeft">
            About Me
          </h2>
          <p className="text-base lg:text-lg animate-fadeIn">
            I am a skilled web developer with expertise in website design and implementation.
            Staying up-to-date with current design trends, I build user-friendly websites.
            I am a dedicated Computer Science student with a strong desire to grow in the field of technology,
            particularly in AI and data science.
          </p>
          <div className="flex flex-row mt-8 space-x-4">
            {TAB_DATA.map((tabData) => (
              <Tabbutton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </Tabbutton>
            ))}
          </div>
          <div className="mt-8 animate-fadeIn">
            <div className="min-h-[150px]">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
