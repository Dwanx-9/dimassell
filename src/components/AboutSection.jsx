"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Solidity (Learning)</li>
        </ul>
      ),
    },
    {
      title: "Exprience",
      id: "exprience",
      content: (
        <ul className="list-disc pl-2">
          <li>Full-stack</li>
          <li>Social Media Specialist</li>
          <li>University of California</li>
        </ul>
      ),
    },
    {
      title: "Hobby",
      id: "hobby",
      content: (
        <ul className="list-disc pl-2">
          <li>Bug Bounty Hunter</li>
          <li>Airdrop Hunter</li>
          <li>Node Runner</li>
          <li>Art Ilustrator</li>
          <li>Music</li>

        </ul>
      )
    },
  ];



const AboutSection = () => { 
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition()  

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

    return (

     <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 justify-self-end py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/cat1.png" type="image/webp" alt="png" width={500} height={500} className="md:animate-pulse float-left"></Image>
        <div className="mt-4 md:mt-0 text-left justify-items-center flex-cols-2 h-full">
          <h2 className="text-4xl font-bold text-primary-500 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
                     I started studying blockchain technology from 2017, and started focusing on social media specialist in the crypto community, 
                     I am very enthusiastic about crypto.
                 </p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton 
                selecTab={() => handleTabChange("skills")} 
                active={tab === "skills"}
                >
                    {""}
                    Skills{""}
                </TabButton>    

                <TabButton 
                selecTab={() => handleTabChange("exprience")} 
                active={tab === "exprience"}
                >
                    {""}
                    Exprience{""}
                </TabButton>
                
                <TabButton 
                selecTab={() => handleTabChange("hobby")} 
                active={tab === "hobby"}
                >
                    {""}
                    Hobby{""}
                </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div>
    </section>
    );
};

export default AboutSection;
