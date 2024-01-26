import React from "react";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";

const Attractions = () => {
  return (
    <div className="py-7 border border-[#F0F0F0] border-solid mt-[-6px]">
      <div className="container">
        <Flex className="items-center justify-between">
          <Flex className="items-center gap-x-0 sm:gap-x-1">
            <RiNumber2 />
            <p className="font-primaryFont font-normal text-[8px] sm:text-base text-pragrap-100">
              Two years warranty
            </p>
          </Flex>
          <Flex className="items-center gap-x-[3px] sm:gap-x-2">
            <FaCarSide />

            <p className="font-primaryFont font-normal text-[8px] sm:text-base text-pragrap-100">
              Free shipping
            </p>
          </Flex>
          <Flex className="items-center gap-x-[3px] sm:gap-x-2">
            <IoReloadSharp />
            <p className="font-primaryFont font-normal text-[8px] sm:text-base text-pragrap-100">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Attractions;
