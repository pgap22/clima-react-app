import React from "react";


export const Input = ({label, placeholder, icon,saveCity}) => {
  return (
    <div>
      <label htmlFor={label} className="text-4xl font-bold dark:text-white">{label}</label>
      <div className="border-2 dark:border-darkgray dark:bg-dark-background-input ph-bold rounded-md flex items-center gap-1 px-2 select-none">
        <img src={icon} id={label} alt="IconCity" />
        <input
          onChange={(e)=>{
            saveCity(e.target.value);
          }}
          type="text"
          placeholder={placeholder}
          className="mt-1 dark:text-white text-2xl outline-none bg-transparent w-full"
        />
      </div>
    </div>
  );
};
