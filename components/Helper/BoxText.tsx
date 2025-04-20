import React from "react";

type Props = {
  children: React.ReactNode;
};

const BoxText = ({ children }: Props) => {
  return (
    <div className="border-2 border-gray-300 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#f68967]">
      {children}
    </div>
  );
};

export default BoxText;
