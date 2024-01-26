import React, { useState } from "react";
import Slider from "react-slick";
import Image from "./images";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";

const Bannar = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0px",
              }
            : {
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: "10px 0px",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 993,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "13%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "14px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                      fontSize: "8px",
                    }
                  : {
                      width: "14px",
                      color: "#262626",
                      borderRight: "2px white solid",
                      fontSize: "8px",
                      color: "transparent",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Link to="#">
        <div className="z-[-1]">
          <picture>
            <Image imgsrc="/public/images/bannar-01.jpg" />
          </picture>
        </div>
      </Link>
      <Link to="#">
        <div className="z-[-1]">
          <picture>
            <Image imgsrc="/public/images/bannar-01.jpg" />
          </picture>
        </div>
      </Link>
      <Link to="#">
        <div className="z-[-1]">
          <picture>
            <Image imgsrc="/public/images/bannar-01.jpg" />
          </picture>
        </div>
      </Link>
    </Slider>
  );
};

export default Bannar;
