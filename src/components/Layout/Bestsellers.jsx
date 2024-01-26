import React from "react";
import Product from "./Product";
import PriceDetils from "./PriceDetils";
import Heading from "./Heading";

const Bestsellers = () => {
  return (
    <div>
      <div className="container">
        <Heading tittle="Our Bestsellers" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
          <div>
            <Product
              imgsrc="/public/images/product-5.png"
              title="10%"
              badge={true}
            />
            <PriceDetils
              productName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="my-7 sm:my-0">
            <Product
              imgsrc="/public/images/product-6.png"
              title="10%"
              badge={true}
            />
            <PriceDetils
              productName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="mt-0 sm:mt-7 lg:mt-0">
            <Product
              imgsrc="/public/images/product-7.png"
              title="10%"
              badge={true}
            />
            <PriceDetils
              productName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="mt-7 lg:mt-0">
            <Product
              imgsrc="/public/images/product-8.png"
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
      </div>
    </div>
  );
};

export default Bestsellers;
