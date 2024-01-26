import React, { useEffect, useState } from "react";
import List from "./List";
import Items from "./items";
import Image from "./images";
import ManubarResponsive from "./ManubarResponsive";

const Navbar = () => {
  // useEffect(() => {
  //   const scrollWidth = () => {
  //     if (window.innerWidth < 992) {
  //       setShow(false);
  //     } else {
  //       setShow(true);
  //     }
  //   };
  //   scrollWidth();
  //   window.addEventListener("resize", scrollWidth);
  // }, []);
  return (
    <div className="py-7">
      <ManubarResponsive />
      <div className="container">
        <div className="md:flex md:items-center">
          <div className="hidden md:block md:w-3/12">
            <Image imgsrc="../public/images/Logo.png" />
          </div>
          <div className="hidden md:block md:w-3/4">
            <List className="md:flex md:justify-end md:items-center gap-10 ">
              <Items
                className=" font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                itemName="Home"
              />
              <Items
                className=" font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                itemName="Shop"
              />
              <Items
                className=" font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                itemName="About"
              />
              <Items
                className=" font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                itemName="Journal"
              />
              <Items
                className="font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                itemName="Contacts"
              />
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
