import React from "react";
import Flex from "./Flex";

const PriceDetils = ({ productName, price, color }) => {
  return (
    <div className="mt-6">
      <Flex className="items-center justify-between">
        <p className="font-primaryFont font-bold text-base text-black-100">
          {productName}
        </p>
        <span className="font-primaryFont font-normal text-base text-gray-100 ">
          {price}
        </span>
      </Flex>
      <h6 className="mt-3 font-primaryFont font-normal text-base text-gray-100 ">
        {color}
      </h6>
    </div>
  );
};

export default PriceDetils;
