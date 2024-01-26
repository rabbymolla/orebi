import React from "react";

import Image from "./images";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="py-7 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-5">
          <div className="relative">
            <Link to="#">
              <picture>
                <Image imgsrc="/public/images/light-1.jpg" />
              </picture>
            </Link>
            <div className="opacity-100 hover:opacity-0 duration-100 ease-in absolute top-0 left-0 w-full h-full bg-black-rgb"></div>
          </div>
          <div>
            <div className="relative">
              <Link to="#">
                <picture>
                  <Image imgsrc="/public/images/electronic-1.jpg" />
                </picture>
              </Link>
              <div className="opacity-100 hover:opacity-0 duration-100 ease-in absolute top-0 left-0 w-full h-full bg-black-rgb"></div>
            </div>
            <div className="relative mt-3  md:mt-6 lg:mt-8">
              <Link to="#">
                <picture>
                  <Image imgsrc="/public/images/offer-1.jpg" />
                </picture>
              </Link>
              <div className="opacity-100 hover:opacity-0 duration-100 ease-in absolute top-0 left-0 w-full h-full bg-black-rgb"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
