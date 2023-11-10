import React from "react";
import bgPhoto from "../../../assets/images/banner.jpg";
import TravelBookingForm from "./TravelBookingForm";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${bgPhoto})` }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-4xl font-bold">
                Explore The <br />
                <span className="text-red-700 text-7xl"> Travle & </span>
                <span className="text-green-700 text-7xl">Adventures</span>
              </h1>
              <p className="mb-5 ">
                Find awesome hotel,tour ,car and activities in world.
              </p>
            </div>
          </div>
          <div>
            <TravelBookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
