import React from "react";
import { Link } from "react-router-dom";
import Image from "./images";

const Addverttenge = () => {
  return (
    <div className="my-12 lg:my-28">
      <div className="container">
        <Link to="#">
          <Image imgsrc="/public/images/fullImage.png" />
        </Link>
      </div>
    </div>
  );
};

export default Addverttenge;
