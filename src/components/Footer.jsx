"use client";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="mx-10 mt-10">
      <footer className=" p-3 lg:flex lg:items-center lg:justify-center lg:gap-x-8 lg:border-t lg:shadow-md lg:shadow-teal-300 lg:border-teal-500 lg:rounded-lg shadow-md shadow-teal-300 border-t border-teal-300">
        <p className="text-white">© shakil.cse201@gmail.com</p>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/mask-shakill"
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mask-shakil"
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>
      </footer>
    </footer>
  );
};

export default Footer;
