import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div>
      <h1 className=" capitalize font-primaryFont font-bold text-black-100 text-xl md:text-5xl mb-2">
        {window.location.pathname.split("/")[1]}
      </h1>
      <p className="flex items-center font-primaryFont font-normal text-sm text-gray-100  capitalize">
        Home <MdKeyboardArrowRight /> {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default BreadCrumb;
