import React, { useState } from "react";
import BreadCrumb from "../components/Layout/BreadCrumb";
import Pagenatiion from "../components/Layout/Pagenatiion";
import Selector from "../components/Layout/Selector";
import { AiOutlineBars, AiOutlineAppstore } from "react-icons/ai";
import LeftSideBar from "../components/Layout/LeftSideBar";

const Shop = () => {
  const [showPage, setShowPage] = useState(12);
  const handlePageChange = (e) => {
    setShowPage(+e.target.value);
  };
  return (
    <div className="pt-8 md:pt-16">
      <div className="block md:hidden ">
        <LeftSideBar />
      </div>
      <div className="container">
        <BreadCrumb />
        <div className="md:flex gap-x-6 mt-11">
          <div className="hidden md:block md:w-[30%] lg:w-1/5 xl:w-1/4">
            <LeftSideBar />
          </div>
          <div className="w-full md:w-[70%] lg:w-4/5 xl:w-3/4 relative">
            <div className="flex items-end sm:items-center mb-7 gap-3">
              <div className="sm:w-1/4 w-full lg:w-[20%] flex items-center gap-2 ">
                <div className="border border-solid border-border-100 p-3">
                  <AiOutlineAppstore />
                </div>
                <div className="border border-solid border-border-100 p-3">
                  <AiOutlineBars />
                </div>
              </div>
              <div className="sm:w-3/4 w-full lg:w-[80%] flex justify-end gap-3 lg:gap-10">
                <div>
                  <Selector
                    title="Sort by :"
                    className="border border-broder-100 rounded-lg focus:ring-broder-100 focus:border-broder-100 block w-[100px] lg:w-[240px] p-2.5   dark:bg-white dark:text-black-100  font-primaryFont font-normal text-sm text-black-100"
                    catgory="Featured"
                  />
                </div>
                <div>
                  <Selector
                    title="Show :"
                    className="border border-broder-100 rounded-lg focus:ring-broder-100 focus:border-broder-100 block w-[70px] lg:w-[140px] p-2.5   dark:bg-white dark:text-black-100  font-primaryFont font-normal text-sm text-black-100"
                    catgory="12"
                    valueOne={"24"}
                    valueTwo="36"
                    valueThree="48"
                    valueFour="60"
                    handlePageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
            <Pagenatiion itemsPerPage={showPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
