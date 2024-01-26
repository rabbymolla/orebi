import React from "react";
import BreadCrumb from "../components/Layout/BreadCrumb";
import Image from "../components/Layout/images";

const About = () => {
  return (
    <div className="pt-16">
      <div className="container">
        <BreadCrumb />
        <div className="grid grid-cols-2 gap-5 lg:gap-10 mt-10">
          <div>
            <Image imgsrc="/public/images/about-1.png" className="w-full" />
          </div>
          <div>
            <Image imgsrc="/public/images/about-1.png" className="w-full" />
          </div>
        </div>
        <p className="font-primaryFont font-normal text-sm md:text-3xl leading-6 lg:leading-[52px] mt-10 md:mt-20 text-black-100">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
        <div className="sm:grid sm:grid-cols-3 sm:gap-5 lg:gap-10 mt-8 md:mt-16">
          <div>
            <h1 className="font-primaryFont font-bold text-lg text-black-100 mb-3">
              Our Vision
            </h1>
            <p className="font-primaryFont font-normal text-sm text-gray-100 leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="my-5 sm:mt-0">
            <h1 className="font-primaryFont font-bold text-lg text-black-100 mb-3">
              Our Story
            </h1>
            <p className="font-primaryFont font-normal text-sm text-gray-100 leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h1 className="font-primaryFont font-bold text-lg text-black-100 mb-3">
              Our Brands
            </h1>
            <p className="font-primaryFont font-normal text-sm text-gray-100 leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
