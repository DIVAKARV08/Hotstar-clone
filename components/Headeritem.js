import React from "react";

const Headeritem = ({ title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer ml-5">
      <p className="tracking-widest">{title}</p>
    </div>
  );
};

export default Headeritem;
