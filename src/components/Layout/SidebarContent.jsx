import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import ShowBarItems from "./ShowBarItems";

const SidebarContent = ({ dropDwon, title, data }) => {
  const [DropShow, setDropShow] = useState(dropDwon);
  const [showBar, setShowBar] = useState(DropShow);
  return (
    <div className="mb-14">
      {DropShow ? (
        <div
          onClick={() => setShowBar(!showBar)}
          className="flex items-center justify-between cursor-pointer mb-10"
        >
          <h1 className="font-primaryFont font-bold text-xl text-black-100">
            {title}
          </h1>
          <IoMdArrowDropdown />
        </div>
      ) : (
        <h1 className="font-primaryFont font-bold text-xl text-black-100 mb-10">
          {title}
        </h1>
      )}

      {showBar && (
        <div>
          {data.map((items, i) =>
            items.subcatagory ? (
              <ShowBarItems
                key={i}
                dropDwon={items.subcatagory ? true : false}
                title={items.name}
              >
                {items.subcatagory &&
                  items.subcatagory.map((data) => (
                    <p className="cursor-pointer border-b border-border-100 border-solid pb-4 mb-7">
                      {data.name}
                    </p>
                  ))}
              </ShowBarItems>
            ) : (
              <ShowBarItems
                key={i}
                dropDwon={items.subcatagory ? true : false}
                title={items.name}
                color={items.code}
              >
                {items.subcatagory &&
                  items.subcatagory.map((data, i) => (
                    <p
                      key={i}
                      className="cursor-pointer border-b border-border-100 border-solid pb-4 mb-7"
                    >
                      {data.name}
                    </p>
                  ))}
              </ShowBarItems>
            )
          )}
        </div>
      )}
      {!DropShow && (
        <div>
          {data.map((items, i) =>
            items.subcatagory ? (
              <ShowBarItems
                key={i}
                dropDwon={items.subcatagory ? true : false}
                title={items.name}
              >
                {items.subcatagory &&
                  items.subcatagory.map((data) => (
                    <p className="cursor-pointer border-b border-border-100 border-solid pb-4 mb-7">
                      {data.name}
                    </p>
                  ))}
              </ShowBarItems>
            ) : (
              <ShowBarItems
                key={i}
                dropDwon={items.subcatagory ? true : false}
                title={items.name}
                color={items.code}
              >
                {items.subcatagory &&
                  items.subcatagory.map((data, i) => (
                    <p
                      key={i}
                      className="cursor-pointer border-b border-border-100 border-solid pb-4 mb-7"
                    >
                      {data.name}
                    </p>
                  ))}
              </ShowBarItems>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
