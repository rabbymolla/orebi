import React from "react";
import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Product = ({ imgsrc, className, badge, title }) => {
  return (
    <div className="relative  group overflow-y-hidden">
      <img src={imgsrc} className={className} />
      {badge && <Badge title={title} />}
      <div className="bg-white w-full h-1/2 py-4 px-5 absolute group-hover:bottom-0 bottom-[-50%] left-0 ease-in duration-300">
        <Link to="#">
          <Flex className="items-center justify-end">
            <p className="font-primaryFont font-normal text-base text-gray-100 pr-3 hover:font-bold  hover:text-black-100 ease-in duration-100">
              Add to Wish List
            </p>
            <FaHeart />
          </Flex>
        </Link>
        <Link to="#">
          <Flex className="items-center justify-end my-3">
            <p className="font-primaryFont font-normal text-base text-gray-100 pr-3 hover:font-bold  hover:text-black-100 ease-in duration-100">
              Compare
            </p>
            <TfiReload />
          </Flex>
        </Link>
        <Link to="#">
          <Flex className="items-center justify-end">
            <p className="font-primaryFont font-normal text-gray-100 hover:font-bold text-base hover:text-black-100 ease-in duration-100 pr-3">
              Add to Cart
            </p>
            <FaCartPlus size={20} />
          </Flex>
        </Link>
      </div>
    </div>
  );
};

export default Product;
