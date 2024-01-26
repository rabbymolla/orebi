import React from "react";
import Product from "./Product";
import PriceDetils from "./PriceDetils";
import Heading from "./Heading";

const SpecialOffers = () => {
  return (
    <div>
      <div className="container">
        <Heading tittle="Special Offers" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
          <div>
            <Product
              imgsrc="/public/images/product-9.png"
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
              imgsrc="/public/images/product-10.png"
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
              imgsrc="/public/images/product-11.png"
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
              imgsrc="/public/images/product-12.png"
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

export default SpecialOffers;
