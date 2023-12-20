"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Connect Bot",
      id: "bot",
      content: (
        <ul className="list-disc pl-2">
          <li>CREATE A DATA BASE FRAMEWORK With JavaScript </li>
          <li>Connect BOT to Data Base</li>
          <li>I have an idea to build a data framework using spreed sheet, 
              then connect it with BOT telegram using Java Script (JS) 
              programming language to monitor data data cooperation with the project.
        </li>
        </ul>
      ),
    },
    {
      title: "Personal Skill",
      id: "writing",
      content: (
        <ul className="list-disc pl-2">
          <li>ARTICLE WRITING POST.</li>
          <li>Create interesting article content about the development of blockchain technology, update crypto currency market news and analyze the hype content.</li>
        </ul>
      )
    },
  ];


const Exprience = () => { 
  const [tab, setTab] = useState("bot");
  const [isPending, startTransition] = useTransition()  

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

    return (
      <section className="mt-4 text-white border-4 border-orange-200 border-l-orange-500 " id="Exprience">

      <div className="md:grid md:grid-cols-5px gap-8 items-center py-7 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left justify-items-center flex-cols-2 h-full px-2">

          <h2 className="text-4xl font-bold text-primary-500 mb-4">Exprience</h2>
          <p className="text-base lg:text-lg">
                     I started studying Web3 technology , Solidty, JS, Python, and started focusing on development in the crypto community, 
                     I am very enthusiastic about crypto & Web3 .
                 </p>
                
            <div className="flex flex-row justify-start mt-9">
                <TabButton 
                selecTab={() => handleTabChange("bot")} 
                active={tab === "bot"}
                >
                    {""}
                    Connect BOT{""}
                </TabButton>    

                <TabButton 
                selecTab={() => handleTabChange("writing")} 
                active={tab === "writing"}
                >
                    {""}
                    Writing Article{""}
                </TabButton>
               
              
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>

        </div>
    </div>
    
    </section>
    );
};

export default Exprience;
