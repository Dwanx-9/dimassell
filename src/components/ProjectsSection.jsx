"use client"
import React, {  useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
    {
        id: 1,
        title: "Creat Website",
        description: "Lets Build Your Website with Next.js/React Framework",
        image: "/image/project/15.png",
        tag: ["All", "Web"],
        gitUrl: "https://app.gitbook.com/o/Taah7xiBVuDXY8xeswHV/s/prPW5745u0aHaggxMlU9/overview/build-your-website/website-development-price-list",
        previewUrl: "https://app.gitbook.com/o/Taah7xiBVuDXY8xeswHV/s/prPW5745u0aHaggxMlU9/overview/build-your-website/website-development-price-list",
    },
    {
        id: 2,
        title: "Creat Your Bot",
        description: "Creat BOT , Request Your BOT Custom",
        image: "/image/project/13.png",
        tag: ["All", "Web"],
        gitUrl: "https://dx1node.gitbook.io/dx-1node/",
        previewUrl: "https://dx1node.gitbook.io/dx-1node/",
    },
    {
        id: 3,
        title: "Desain Grapich",
        description: "Creat your Desain for Profesional Project ",
        image: "/image/project/12.png",
        tag: ["All", "Web"],
        gitUrl: "https://dx1node.gitbook.io/dx-1node/",
        previewUrl: "https://dx1node.gitbook.io/dx-1node/",
    },
    {
        id: 4,
        title: "Recent Project",
        description: "This is My Recent Project",
        image: "/image/project/11.png",
        tag: ["All", "Web"],
        gitUrl: "/about",
        previewUrl: "/about",
    },
    {
        id: 5,
        title: "Serenity Mosaic",
        description: "Lets Connet With Seren Mosaic",
        image: "/image/project/14.png",
        tag: ["All", "Web"],
        gitUrl: "https://serenity-blog.vercel.app/",
        previewUrl: "https://serenity-blog.vercel.app/",
    },
    {
        id: 6,
        title: "Content Writing",
        description: "Generate Content Writing Like News,Insight,Airdrop Campaign",
        image: "/image/project/16.png",
        tag: ["All", "Web"],
        gitUrl: "https://serenity-blog.vercel.app/categories",
        previewUrl: "https://serenity-blog.vercel.app/categories",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = ProjectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
    return (
        <section ref={ref}>
            <h1 className=" flex flex-row justify-center items-center float-none text-4xl font-bold text-primary-500  mt-4 mb-8 md:mb-12"> 
            MY PROJECT
            </h1>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
              </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection;
