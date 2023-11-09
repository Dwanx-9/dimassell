"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Nindsean Land",
      id: "nindsean",
      content: (
        <ul className="list-disc pl-2">
          <li>Welcome to the Universe of NinDsean Land</li>
          <li>Why NinDsean</li>
          <li>A total of 4,320 Lands will be Minted. 
                Calling all explorers of the universe in the Web3 world.
        </li>
        </ul>
      ),
    },
    {
      title: "Web3 Land",
      id: "web3",
      content: (
        <ul className="list-disc pl-2">
          <li>Web3 is the third generation of internet networks where users and applications are connected in a decentralized ecosystem.</li>
          <li>The characteristics of Web3 are trustless and permissionless, self-governance, and data ownership.</li>
        </ul>
      )
    },
  ];


const Exprience = () => { 
  const [tab, setTab] = useState("nindsean");
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
                 <a href="#" class="btn btn-primary">Go somewhere</a>
            <div className="flex flex-row justify-start mt-9">
                <TabButton 
                selecTab={() => handleTabChange("nindsean")} 
                active={tab === "nindsean"}
                >
                    {""}
                    NinDsean Land{""}
                </TabButton>    

                <TabButton 
                selecTab={() => handleTabChange("web3")} 
                active={tab === "web3"}
                >
                    {""}
                    Web3 Land{""}
                </TabButton>
               
              
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>

        </div>
    </div>
    
    </section>
    );
};

export default Exprience;
