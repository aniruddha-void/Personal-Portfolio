"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, JavaScript</li>
        <li>React.js</li>
        <li>Node.js, Express.js</li>
        <li>MongoDB</li>
        <li>C, C++</li>
        <li>Java</li>
        <li>Database Management Systems (DBMS)</li>
        <li>Data Structures and Algorithms (DSA)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Technology (B.Tech) – Pursuing (Expected 2028)</li>
        <li>Higher Secondary Education (12th, Science Stream) – Vishwasattya Junior College of Science, 2024</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Virtual AI & ML Internship – Eduskills & AICTE</li>
        <li>Web Development Course Certification</li>
        <li>Introduction to SQL – Google</li>
      </ul>
    ),
  },
  {
    title: "Internships",
    id: "internships",
    content: (
      <ul className="list-disc pl-2">
        <li>Virtual AI & ML Internship – Eduskills & AICTE (July 2025)</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an aspiring Full Stack Developer with a strong focus on the MERN Stack
            (MongoDB, Express.js, React.js, Node.js).
            I have hands-on experience with HTML, CSS, JavaScript,
            React.js, Node.js, Express.js, and MongoDB, along with a solid foundation in C, C++,
            Java, DBMS, and Data Structures & Algorithms (DSA). Passionate about building interactive and responsive web applications,
            I continuously work on improving my skills in both front-end and back-end development. My ultimate goal is to become a professional Full Stack MERN Developer
            and contribute to creating innovative, real-world applications that make an impact.


          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >

              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
