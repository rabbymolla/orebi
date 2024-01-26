import React from "react";

const Search = ({ className, type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default Search;
