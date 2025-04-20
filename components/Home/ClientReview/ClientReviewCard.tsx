import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

interface Props {
  name: string;
  image: string;
  rating: string;
  descr:string;
}

const ClientReviewCard = ({ name, image, rating, descr }: Props) => {
  return (
    <div className="bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg">
      {/* Image */}
      <div>
        <Image
          src={image}
          alt={name}
          width={350}
          height={350}
          className="rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-lg font-bold text-blue-950">{name}</h1>
        <div className="flex items-center space-x-3">
          <p className="text-2xl font-bold text-orange-500">{rating}</p>
          <div className="flex items-center">
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <BsStarHalf className="w-4 h-4 text-yellow-600" />
          </div>        
        </div>
        <p className="mt-2 text-base text-gray-700 font-medium">{descr}</p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
