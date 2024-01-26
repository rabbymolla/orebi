import React from "react";

const Heading = ({ tittle }) => {
  return (
    <h1 className="mb-4 lg:mb-9 font-primaryFont font-bold text-xl lg:text-4xl text-black-100">
      {tittle}
    </h1>
  );
};

export default Heading;
