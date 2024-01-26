import React from "react";
import { Link } from "react-router-dom";

const Items = ({ itemName, className, harf }) => {
  return (
    <li className={className}>
      <Link to={harf}>{itemName}</Link>
    </li>
  );
};

export default Items;
