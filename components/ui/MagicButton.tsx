import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
}) => {
  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <div className="flex flex-row gap-4 justify-center items-center">
          {title}
          {icon}
        </div>
      </div>
    </button>
  );
};

export default MagicButton;
