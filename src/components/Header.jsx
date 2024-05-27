"use client";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const Header = ({ onAddClick }) => {
  return (
    <nav className="lg:mt-10 lg:p-4 lg:mx-32 lg:shadow-lg lg:shadow-yellow-300 lg:rounded-full lg:border-t lg:border-t-white  flex items-center justify-between mt-3 mx-3 shadow-md border-t border-white shadow-emerald-300 px-3 py-1 rounded-full">
      <h1 className="text-white font-bold lg:text-5xl brand-name text-2xl ">
        CareTutors Todo
      </h1>
      <button onClick={onAddClick}>
        <IoMdAddCircle className="lg:text-4xl lg:font-bold lg:text-white text-3xl text-white" />
      </button>
    </nav>
  );
};

export default Header;
