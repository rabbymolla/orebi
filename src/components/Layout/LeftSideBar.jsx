import React, { useEffect, useRef, useState } from "react";
import SidebarContent from "./SidebarContent";
import { brand, catgory, color, price } from "../../Data/data";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
const variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: "-100%",
    opacity: 1,
  },
};

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  });
  return (
    <>
      <div ref={ref}>
        <motion.nav
          className="md:hidden bg-white  inline-block fixed z-10 top-0 left-0 drop-shadow-lg"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          {isOpen ? (
            <>
              <div className=" w-[300px]">
                <div
                  className="pl-8 pr-3 py-3 bg-black-100 mb-2 drop-shadow-lg"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  <MdClose color="#fff" />
                </div>
                <div className="h-[100vh] overflow-y-auto px-8 ">
                  <SidebarContent
                    dropDwon={false}
                    title="Shop by Category"
                    data={catgory}
                  />
                  <SidebarContent
                    dropDwon={true}
                    title="Shop by Color"
                    data={color}
                  />
                  <SidebarContent
                    dropDwon={true}
                    title="Shop by Brand"
                    data={brand}
                  />
                  <SidebarContent
                    dropDwon={false}
                    title="Shop by Price"
                    data={price}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="pl-3 pr-2 py-3 bg-red-100 fixed top-[272px] sm:top-[150px] left-[-10px] z-10  drop-shadow-lg text-[10px] block">
                Click
              </div>
            </>
          )}
        </motion.nav>
      </div>
      <div className="hidden md:block">
        <SidebarContent
          dropDwon={false}
          title="Shop by Category"
          data={catgory}
        />
        <SidebarContent dropDwon={true} title="Shop by Color" data={color} />
        <SidebarContent dropDwon={true} title="Shop by Brand" data={brand} />
        <SidebarContent dropDwon={false} title="Shop by Price" data={price} />
      </div>
    </>
  );
};

export default LeftSideBar;
