import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div id="pricing" className="scroll-mt-[12vh] pt-16 pb-16 bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-950 text-center">
        Choose The Plan That&apos;s Right For You
      </h1>
      <p className="mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam
        pariatur commodi maiores consequuntur a.
      </p>
      
      <div className="w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-10">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <PricingCard time="3 Month" price="39.99" /> 
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <PricingCard time="12 Month" price="19.99" /> 
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <PricingCard time="Life time" price="9.99" /> 
        </div>
      </div>
    </div>
  );
};

export default Pricing;
