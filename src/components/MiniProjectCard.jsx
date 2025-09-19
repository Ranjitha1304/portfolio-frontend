import React from "react";

const MiniProjectCard = ({ title }) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-3 min-h-[64px]">
      <h5 className="font-medium text-slate-800">{title}</h5>
    </div>
  );
};

export default MiniProjectCard;
