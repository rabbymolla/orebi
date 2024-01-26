import React from "react";

const Selector = ({
  title,
  className,
  catgory,
  valueOne,
  valueTwo,
  valueThree,
  valueFour,
  handlePageChange,
}) => {
  return (
    <>
      <div className="sm:flex items-center gap-4">
        <div>
          <p className="font-primaryFont font-normal text-sm text-black-100">
            {title}
          </p>
        </div>
        <div>
          <select
            onChange={handlePageChange}
            id="countries"
            className={className}
          >
            <option defaultValue>{catgory}</option>
            <option value={valueOne}>{valueOne}</option>
            <option value={valueTwo}>{valueTwo}</option>
            <option value={valueThree}>{valueThree}</option>
            <option value={valueFour}>{valueFour}</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Selector;
