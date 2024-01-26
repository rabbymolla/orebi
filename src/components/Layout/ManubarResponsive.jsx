import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Image from "./images";
import List from "./List";
import Items from "./items";

const ManubarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Manuref = useRef();
  const variantss = {
    open: {
      x: "-0%",
      opacity: 1,
    },
    closed: {
      x: "100%",
      opacity: 1,
    },
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (Manuref.current.contains(e.target)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  });
  return (
    <div className="block md:hidden " ref={Manuref}>
      <div className="container flex items-center justify-between">
        <Image imgsrc="../public/images/Logo.png" />
        <div className=" -z-10" onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <HiMiniBars3BottomRight cursor="pointer" />
        </div>
      </div>
      <motion.div
        variants={variantss}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        className=" fixed top-0 right-0  drop-shadow-lg z-10 bg-white"
      >
        {isOpen && (
          <div className="w-[300px]">
            <div
              className=" absolute top-4 right-8 drop-shadow-lg"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <MdClose color="#000" />
            </div>
            <div className="h-[100vh] overflow-y-auto px-8 py-3">
              <List>
                <Items
                  className="mt-9 lg:mt-0 font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                  itemName="Home"
                />
                <Items
                  className="mt-3 lg:mt-0 font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                  itemName="Shop"
                />
                <Items
                  className="mt-3 lg:mt-0 font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                  itemName="About"
                />
                <Items
                  className="mt-3 lg:mt-0 font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                  itemName="Journal"
                />
                <Items
                  className="mt-3 lg:mt-0 font-primaryFont font-normal text-sm text-gray-100 hover:font-bold hover:text-black-100"
                  itemName="Contacts"
                />
              </List>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ManubarResponsive;
