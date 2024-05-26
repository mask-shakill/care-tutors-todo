import { IoMdAddCircle } from "react-icons/io";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="lg:mt-10 lg:p-4 lg:mx-32 lg:shadow-lg lg:shadow-yellow-300 lg:rounded-full lg:border-t lg:border-t-white  flex items-center justify-between mt-3 mx-3 shadow-md border-t border-white shadow-emerald-300 px-3 py-1 rounded-full">
      <h1 className="text-white font-bold lg:text-5xl brand-name text-2xl ">
        CareTutors Todo
      </h1>
      <Link href={"/add-todo"}>
        <IoMdAddCircle className="lg:text-4xl lg:font-bold lg:text-white text-3xl text-white" />
      </Link>
    </nav>
  );
};

export default Header;
