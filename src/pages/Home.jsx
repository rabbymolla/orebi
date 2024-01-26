import React from "react";
import Bannar from "../components/Layout/Bannar";
import Attractions from "../components/Layout/Attractions";
import Offer from "../components/Layout/Offer";
import Newarrival from "../components/Layout/Newarrival";
import Bestsellers from "../components/Layout/Bestsellers";
import Addverttenge from "../components/Layout/Addverttenge";
import SpecialOffers from "../components/Layout/SpecialOffers";

const Home = () => {
  return (
    <>
      <Bannar />
      <Attractions />
      <Offer />
      <Newarrival />
      <Bestsellers />
      <Addverttenge />
      <SpecialOffers />
    </>
  );
};

export default Home;
