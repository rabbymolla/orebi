import { Link } from "react-router-dom";
import Flex from "./Flex";
import List from "./List";
import Image from "./images";
import Items from "./items";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="mt-9 md:mt-24 bg-[#F5F5F3] py-6 md:pt-10 md:pb-2">
      <div className="container">
        <div className="md:hidden">
          <div className="grid grid-cols-12 gap-4  text-center">
            <div className="col-start-1 col-end-13 mb-7 md:mb-0">
              <div>
                <div className="flex justify-center mb-5">
                  <Image imgsrc="/public/images/Logo.png" />
                </div>
                <div>
                  <h4 className="mb-4 font-primaryFont text-base font-bold">
                    (052) 611-5711 <br /> company@domain.com
                  </h4>
                  <p className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]">
                    575 Crescent Ave. Quakertown, PA 18951
                  </p>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-4">
              <div>
                <h4 className="mb-4 font-primaryFont text-base font-bold">
                  MENU
                </h4>
                <List>
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Home"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Shop"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="About"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Contact"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Journal1"
                    href="#"
                  />
                </List>
              </div>
            </div>
            <div className="col-start-4 col-end-8">
              <div>
                <h4 className="mb-4 font-primaryFont text-base font-bold">
                  SHOP
                </h4>
                <List>
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Category 1"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Category 2"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Category 3"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Category 4"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Category 5"
                    href="#"
                  />
                </List>
              </div>
            </div>
            <div className="col-start-8 col-end-13">
              <div>
                <h4 className="mb-4 font-primaryFont text-base font-bold">
                  HELP
                </h4>
                <List>
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Privacy Policy"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Terms & Conditions"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Special E-shop"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Shipping"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-[10px] sm:text-sm text-[#6D6D6D]"
                    itemName="Secure Payments"
                    href="#"
                  />
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-4  ">
            <div className="col-start-1 col-end-3 ">
              <div>
                <h4 className="mb-4 font-primaryFont text-base font-bold">
                  MENU
                </h4>
                <List>
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Home"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Shop"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="About"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Contact"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Journal1"
                    href="#"
                  />
                </List>
              </div>
            </div>
            <div className="col-start-3 col-end-5 ">
              <div>
                <h4 className="mb-4 font-primaryFont text-base font-bold">
                  SHOP
                </h4>
                <List>
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Category 1"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Category 2"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Category 3"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Category 4"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Category 5"
                    href="#"
                  />
                </List>
              </div>
            </div>
            <div className="col-start-5 col-end-8 ">
              <div>
                <h4 className="mb-4 font-primaryFont text-base font-bold">
                  HELP
                </h4>
                <List>
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Privacy Policy"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Terms & Conditions"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Special E-shop"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Shipping"
                    href="#"
                  />
                  <Items
                    className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]"
                    itemName="Secure Payments"
                    href="#"
                  />
                </List>
              </div>
            </div>
            <div className="col-start-8 col-end-12 ">
              <div>
                <div>
                  <h4 className="mb-4 font-primaryFont text-base font-bold">
                    (052) 611-5711 <br /> company@domain.com
                  </h4>
                  <p className="font-normal mt-[6px] font-primaryFont text-sm text-[#6D6D6D]">
                    575 Crescent Ave. Quakertown, PA 18951
                  </p>
                </div>
              </div>
            </div>
            <div className="col-start-12 col-end-13 ">
              <div className="flex justify-end">
                <div>
                  <Image imgsrc="/public/images/Logo.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 sm:grid-cols-12 mt-12 sm:items-center">
          <div className="sm:col-start-1 sm:col-end-3">
            <Flex className="items-center justify-center sm:justify-start gap-3 md:gap-x-8">
              <Link to="#">
                <FaFacebookF size={30} color="#262626" />
              </Link>
              <Link to="#">
                <FaLinkedinIn size={30} color="#262626" />
              </Link>
              <Link to="#">
                <BiLogoInstagramAlt size={30} color="#262626" />
              </Link>
            </Flex>
          </div>
          <div className="sm:col-start-3 sm:col-end-13 mt-4 sm:mt-0">
            <Flex className="justify-center sm:justify-end">
              <Link to="#">
                <p className="font-primaryFont font-normal text-[10px] sm:text-sm text-pragrap-100">
                  2020 Orebi Minimal eCommerce Figma Template by Adveits
                </p>
              </Link>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
