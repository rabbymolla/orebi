import React from "react";
import Heading from "./Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Product from "./Product";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import PriceDetils from "./PriceDetils";

const Newarrival = () => {
  // slick sloider
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pb-14 lg:pb-20">
      <div className="container">
        <Heading tittle="New Arrivals" />
        <Slider {...settings}>
          <div className="max-w-[370px] h-auto ">
            <div className="mx-4">
              <Product
                imgsrc="/public/images/product-1.png"
                title="10%"
                badge={true}
              />
              <PriceDetils
                productName="Basic Crew Neck Tee"
                price="$44.00"
                color="black"
              />
            </div>
          </div>
          <div className="max-w-[370px] h-auto ">
            <div className="mx-4">
              <Product
                imgsrc="/public/images/product-2.png"
                title="New"
                badge={true}
              />
              <PriceDetils
                productName="Basic Crew Neck Tee"
                price="$44.00"
                color="black"
              />
            </div>
          </div>
          <div className="max-w-[370px] h-auto ">
            <div className="mx-4">
              <Product
                imgsrc="/public/images/product-3.png"
                title="Old"
                badge={true}
              />
              <PriceDetils
                productName="Basic Crew Neck Tee"
                price="$44.00"
                color="black"
              />
            </div>
          </div>
          <div className="max-w-[370px] h-auto ">
            <div className="mx-4">
              <Product
                imgsrc="/public/images/product-4.png"
                title="New"
                badge={true}
              />
              <PriceDetils
                productName="Basic Crew Neck Tee"
                price="$44.00"
                color="black"
              />
            </div>
          </div>
          <div className="max-w-[370px] h-auto ">
            <div className="mx-4">
              <Product
                imgsrc="/public/images/product-2.png"
                title="New"
                badge={true}
              />
              <PriceDetils
                productName="Basic Crew Neck Tee"
                price="$44.00"
                color="black"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Newarrival;
