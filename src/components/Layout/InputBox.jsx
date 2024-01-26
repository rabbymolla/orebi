import React from "react";

const InputBox = (props) => {
  return (
    <div className="my-10">
      <p className="mb-2 font-primaryFont font-bold text-base text-black-100">
        {props.tittle}
      </p>

      <props.as
        placeholder={props.placeholder}
        className="resize-none w-full border-b border-solid bolrder-border-100 outline-none pb-3 pl-2 placeholder:font-primaryFont placeholder:font-normal placeholder:text-gray-100 placeholder:text-sm"
      />
    </div>
  );
};

export default InputBox;
