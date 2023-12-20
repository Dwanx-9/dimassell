"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="banner">
          

      <div className='grid-cols-1 lg:grid-cols-16 border-white'>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500'>
                Hello,Call Me {" "}</span>
            <TypeAnimation
             sequence={[
              'Dimas',
                1500,
               'Social Media Specialist',
                 1000,
                'Community Manager',
                1000,
                'FrontEnd Dev',
                 1000
                 ]}
                wrapper="span"
                 speed={30}
                 repeat={Infinity} />
                 </h1>
                 
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl text-gradient-to-br from-primary-500 to-secondary-500'>
            Selamat Berkunjung di Dunia tipu-tipu, Ini Website bukan Keset😜 
            </p>
          <p className='text-green-200 text-base sm:text-lg lg:text-xl md:animate-pulse'>
           Service ONLINE 🟢
            </p>
      <div>

          <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </Link>
          <a
              href="/portofolio.pdf" download={true}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block text-primary-500 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
              </a>
             </div>
            </motion.div>
           
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=""></div>
         
          {/* <div className="rounded-full bg-[#181818] w-[550px] h-[550px] lg:w-[200px] lg:h-[600px] ">
            <Image
              src="/image/OB1.png"
              alt="hero image"
              className=" -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div> */}
        </motion.div>
      </div>
      
    </section>
    
    
  )
}

export default HeroSection
