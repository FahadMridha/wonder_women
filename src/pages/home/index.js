import React from "react";
import { Link } from "react-router-dom";
import Banner from "./banner/Banner";
import Places from "./places/Places";
import Testmonial from "./testmonial/Testmonial";
import TourPlane from "./tourPlane/TourPlane";

const index = () => {
  return (
    <div>
      <Banner />
      <Places />
      <TourPlane />
      <Testmonial />
    </div>
  );
};

export default index;
