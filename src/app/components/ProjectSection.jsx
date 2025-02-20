"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "I've Developed a portfolio website using HTML, CSS, and JavaScript.",
    image: "/images/Projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dineshsut07/Portfolio-HTML-CSS-JS",
    previewUrl: "", // Change to actual preview URL if available
  },
  {
    id: 2,
    title: "Campus Event Management System",
    description: "Developed a CEMS that manages college event operations effectively, allowing users to easily participate and organize events.",
    image: "/images/Projects/pr1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dineshsut07/Campus-Event-Management-System-DBMS-project",
    previewUrl: "", // Change to actual preview URL if available
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Developed an E-Commerce website using HTML, CSS, and JavaScript. The website is responsive and includes product categories and features.",
    image: "/images/Projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "", // No preview available
  },
  {
    id: 4,
    title: "User Management System",
    description: "A React.js application for managing users with a user-friendly interface for administrators.",
    image: "/images/Projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dineshsut07/CRUD-App",
    previewUrl: "", // Change if preview available
  },
  {
    id: 5,
    title: "Women Safety App",
    description: "A mobile application designed to enhance women's safety.",
    image: "/images/Projects/6.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "", // No preview available
    downloadUrl: "https://drive.google.com/file/d/12hs-IGd3F8EUfQRcYv1QIcglOOlcLzor/view?usp=sharing", // Replace with actual file hosting link
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              downloadUrl={project.downloadUrl} // New download button support
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
