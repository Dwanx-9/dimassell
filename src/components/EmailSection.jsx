"use client"
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

  const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative" id="contact">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} />
          </Link>
        </div>
      </div>
      <div>
        <form>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-[#18191E] border caret-primary-500 border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Dimassell@gmail.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="bg-gray-[#18191E] border caret-primary-500 border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              class="bg-gray-[#18191E] caret-primary-500 border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
          </span>
          <div class="mb-6">
            <button
              type="input"
              class="bg-[#121212]  hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition duration-700 ease-in-out"
            >
              {" "}
              Send message{""}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
