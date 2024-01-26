import React from "react";
import BreadCrumb from "../components/Layout/BreadCrumb";
import InputBox from "../components/Layout/InputBox";
import Button from "../components/Layout/Button";

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="container">
        <BreadCrumb />
        <div className="pt-10">
          <h1 className=" font-primaryFont font-bold text-xl md:text-[39px] text-black-100">
            Fill up a Form
          </h1>
          <InputBox as="input" tittle="Name" placeholder="Your name here" />
          <InputBox as="input" tittle="Email" placeholder="Your email here" />
          <InputBox
            as="textarea"
            tittle="Massage"
            placeholder="Your Comment's here"
          />
          <Button tittle="posst" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
