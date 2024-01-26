import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="bg-black-100 text-white-100 text-sm font-primaryFont font-normal py-2 px-8 absolute  top-3 left-3 ">
      {title}
    </span>
  );
};

export default Badge;
