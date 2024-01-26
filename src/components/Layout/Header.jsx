import React, { useEffect, useRef, useState } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { MdMinimize } from "react-icons/md";
import {
  FaSearch,
  FaUser,
  FaCaretDown,
  FaCartPlus,
  FaPlus,
} from "react-icons/fa";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import List from "./List";
import Items from "./items";
import Search from "./Search";
import Image from "./images";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const refCart = useRef();
  const ref = useRef();
  const refTwo = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
      //   user list
      if (refTwo.current.contains(e.target)) {
        setShowTwo(true);
      } else {
        setShowTwo(false);
      }
      //   cart list
      if (refCart.current.contains(e.target)) {
        setShowCart(true);
      } else {
        setShowCart(false);
      }
    });
  });

  return (
    <div className="bg-white-100 py-5">
      <div className="container">
        <Flex className="items-center justify-between">
          <div className="relative w-0 lg:w-[27%]">
            <Dropdown dropRef={ref} className="inline-block">
              <Flex className="items-center cursor-pointer">
                <HiOutlineBars3CenterLeft />
                <p className="hidden lg:inline-block text-sm text-black-100 font-primaryFont font-normal pl-2">
                  Shop by Category
                </p>
              </Flex>
              {show && (
                <List className="absolute top-9 left-0 z-50 w-[263px] bg-black-100">
                  <Items
                    className="font-primaryFont font-normal text-sm text-white-70 ease-in duration-300 border-solid hover:text-white hover:pl-8 border-b py-4 pl-5"
                    itemName="Accesories"
                  />
                  <Items
                    className="font-primaryFont font-normal text-sm text-white-70 py-4 border-b ease-in duration-300 border-solid hover:text-white hover:pl-8 pl-5"
                    itemName="Furniture"
                  />
                  <Items
                    className="font-primaryFont font-normal text-sm text-white-70 py-4 border-b ease-in duration-300 border-solid hover:text-white hover:pl-8 pl-5"
                    itemName="Electronics"
                  />
                  <Items
                    className="font-primaryFont font-normal text-sm text-white-70 py-4 border-b ease-in duration-300 border-solid hover:text-white hover:pl-8 pl-5"
                    itemName="Clothes"
                  />
                  <Items
                    className="font-primaryFont font-normal text-sm text-white-70 py-4 border-b ease-in duration-300 border-solid hover:text-white hover:pl-8 pl-5"
                    itemName="Bags"
                  />
                  <Items
                    className="font-primaryFont font-normal text-sm text-white-70 py-4 pl-5 ease-in duration-300 hover:text-white hover:pl-8"
                    itemName="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="w-1/2">
            <div className="w-auto lg:max-w-[6001px] relative">
              <Search
                placeholder="Search Products"
                className="w-full py-2 pl-3 md:py-4 md:pl-5 bg-white font-primaryFont font-normal placeholder:text-sm placeholder:text-white-30"
              />
              <FaSearch
                className="absolute top-1/2 right-2 md:right-5 translate-y-[-50%]"
                cursor="pointer"
                color="#262626"
              />
            </div>
          </div>
          <div className="w-1/5 flex items-center  justify-end">
            <div className="grid grid-cols-2 gap-x-[80px] md:gap-x-10 ">
              <div className="relative">
                <Dropdown dropRef={refTwo}>
                  <Flex className=" items-center cursor-pointer">
                    <div>
                      <FaUser />
                    </div>
                    <div>
                      <FaCaretDown />
                    </div>
                  </Flex>
                  {showTwo && (
                    <List className=" absolute top-9 right-0 z-50 w-[200px] bg-black-100">
                      <Items
                        className="font-primaryFont font-normal text-sm py-4 border-b border-[#F0F0F0] ease-in duration-300 border-solid text-white hover:text-black-100 hover:bg-white text-center"
                        itemName="My Account"
                      />
                      <Items
                        className="font-primaryFont font-normal text-sm py-4 border-b border-[#F0F0F0] ease-in duration-300 border-solid text-white hover:text-black-100 hover:bg-white text-center"
                        itemName="Log Out"
                      />
                    </List>
                  )}
                </Dropdown>
              </div>
              <div className="flex justify-end">
                <div className="relative">
                  <Dropdown dropRef={refCart}>
                    <FaCartPlus size={20} cursor="pointer" />
                    {showCart && (
                      <div className="absolute top-9 right-0 z-50 w-[310px]  sm:w-[360px] bg-white  border border-[#F0F0F0] border-solid ">
                        <div className="flex items-center justify-between ease-in duration-300 hover:bg-white-100 py-5 px-5">
                          <div className="w-20 h-20 bg-box-100">
                            <picture>
                              <Image imgsrc="/public/images/glass.png" />
                            </picture>
                          </div>
                          <div>
                            <p className="font-primaryFont font-bold text-sm text-black-100">
                              Black Smart Watch
                            </p>
                            <span className="font-primaryFont font-bold text-sm text-black-100 pt-3">
                              $44.00
                            </span>
                          </div>
                          <div>
                            <FaPlus cursor="pointer" />
                            <MdMinimize cursor="pointer" className="mt-2" />
                          </div>
                        </div>
                        <div className="ease-in duration-300 hover:bg-white-100 py-5 px-5">
                          <p className="font-primaryFont font-normal text-base text-gray-100 leading-6">
                            Subtotal:{" "}
                            <span className="text-black-100 font-primaryFont font-bold">
                              $44.00
                            </span>{" "}
                          </p>
                          <div className="flex items-center gap-x-3">
                            <Link
                              to="#"
                              className="font-primaryFont font-bold text-normal text-black-100 py-3 px-6 sm:py-4 sm:px-9 border border-[#2B2B2B] border-solid inline-block mt-3 ease-in duration-300 hover:bg-black-100 hover:text-white"
                            >
                              View Cart
                            </Link>
                            <Link
                              to="#"
                              className="font-primaryFont font-bold text-normal text-black-100  py-3 px-6 sm:py-4 sm:px-9 border border-[#2B2B2B] border-solid inline-block mt-3 ease-in duration-300 hover:bg-black-100 hover:text-white"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
