import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const ShowBarItems = (props) => {
  const [DropShow, setDropShow] = useState(props.dropDwon);
  const [showBar, setShowBar] = useState(false);
  return (
    <>
      {DropShow ? (
        <div
          onClick={() => setShowBar(!showBar)}
          className="flex items-center justify-between cursor-pointer border-b border-border-100 border-solid pb-4 mb-4"
        >
          <p className="font-primaryFont font-normal text-base text-gray-100 ">
            {props.color && (
              <span
                className="w-3 h-3 rounded-full inline-block  mr-2 "
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </p>

          {showBar ? "-" : <FaPlus size={10} />}
        </div>
      ) : (
        <p className="font-primaryFont font-normal text-base text-gray-100 border-b border-border-100 border-solid pb-4 mb-4 cursor-pointer">
          {props.color && (
            <span
              className="w-3 h-3 rounded-full inline-block  mr-2 "
              style={{ background: props.color }}
            ></span>
          )}
          {props.title}
        </p>
      )}

      {showBar && <>{props.children}</>}
    </>
  );
};

export default ShowBarItems;
