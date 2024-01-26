import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PriceDetils from "./PriceDetils";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <div
            className="sm:w-[48%] lg:w-[31%] xl:w-[32%] mb-6 sm:mb-0"
            key={i}
          >
            <Product
              imgsrc="/public/images/product-8.png"
              title="10%"
              badge={true}
            />
            <PriceDetils
              productName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
        ))}
    </>
  );
}

const Pagenatiion = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="sm:flex flex-wrap gap-4 sm:gap-[21px] md:gap-[19px] lg:gap-[26px] xl:gap-[17px] ">
        <Items currentItems={currentItems} />
      </div>
      <div className="lg:flex lg:justify-between lg:items-end mt-6 ">
        <ReactPaginate
          breakLabel="..."
          breakClassName="pt-0 md:pt-[10px]"
          breakLinkClassName="page-link"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          pageLinkClassName="page-link"
          pageClassName="inline-block border border-1 border-solid border-[#F0F0F0] py-2.5 px-3.5 font-primaryFont font-normal text-[12px] text-pragrap-100"
          previousClassName="hidden"
          nextClassName="hidden"
          nextLabel=""
          previousLabel=""
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          containerClassName="flex flex-wrap gap-4 mt-0 md:mt-12"
          activeClassName="border border-1 border-solid border-[#F0F0F0] py-2.5 px-3.5 font-primaryFont font-normal text-[12px] text-white bg-black-100"
        />
        <p className="text-center  mt-5 lg:mt-0 font-primaryFont font-normal text-sm text-gray-100">
          Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
          {items.length}
        </p>
      </div>
    </>
  );
};

export default Pagenatiion;
