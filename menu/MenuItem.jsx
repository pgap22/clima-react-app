import React from "react";
import  IconCheck from "./IconCheck";
const MenuItem = ({name, onClick, value}) => {
  return (
    <div key={name} className="w-full">
      <input
        onChange={(e)=>{
            onClick(e);
        }}
        type="radio"
        className="menu-value"
        value={value}
        id={name}
        name="country"
      />
      <label
        htmlFor={name}
        className="text-3xl dark:text-white menu-item transition-all py-2 w-full text-center border grid grid-cols-3 dark:border-[#4F4F4F] border-l-0 border-r-0 "
      >
        <p className="col-start-2">{value}</p>
        <img
          className=" hidden self-center justify-self-end pr-4 checked-img "
          src={IconCheck}
          alt=""
        />
      </label>
    </div>
  );
};

export default MenuItem;
