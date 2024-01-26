import React from "react";

const Button = ({ tittle, type }) => {
  return (
    <button
      type={type}
      className="py-4 px-10 md:px-20 bg-black-100 font-primaryFont font-bold text-sm text-white"
    >
      {tittle}
    </button>
  );
};

export default Button;
