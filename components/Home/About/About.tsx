import Image from "next/image";
import React from "react";
import BoxText from "../../Helper/BoxText";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image container */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image src="/images/about.png" width={520} height={520} alt="about" />
        </div>
        {/* text content */}
        <div>
          <BoxText> About US </BoxText>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[2.5rem]">
            Everything You Need To Grow Your Business
          </h1>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            dolore? Ratione recusandae veritatis corrupti eum dicta earum! Odit
            voluptates corporis, est eos nostrum dolore libero quibusdam
            repellat facere at accusamus.
          </p>
          <button className="mt-5 text-[#f68967] font-black pb-1 border-b-2 border-[#f68967]">
            Learn More &#8594;
          </button>

          <div className="mt-8 border-l-2 border-gray-200">
            <div className="ml-6">
              <p className="text-gray-700 font-medium">
                {" "}
                &quot; The many integrations that can be linked really help me
                see data from other tools I also use. &quot;
              </p>
              <div className="flex items-center space-x-6 mt-6">
                <Image
                  src="/images/u1.jpg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="">
                  <p className="font-medium">Jessica Doe</p>
                  <p className="text-gray-700 text-sm">Web Developer @TechDev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
