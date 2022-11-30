import React, { useRef, useState } from "react";
import  IconArrow  from "./IconArrow";
import MenuItem from "./MenuItem";

const Menu = ({ label, placeholder, icon, saveCountry, testingArray }) => {
  const [country, changeCountry] = useState("");

  const [show, setShow] = useState(false);


  const menu = useRef();
  const menuTablet = useRef();

  const setCountry = (value)=>{
    changeCountry(value);
    saveCountry(value);
  }

  const hideMenu = () => {
    setShow(false);
    menu.current.classList.remove("show-menu");
    menuTablet.current.classList.remove("show-menu-tablet");
  };

  const showMenu = () => {
    if (!show) {
      setShow(true);
      menu.current.classList.add("show-menu");
      menuTablet.current.classList.add("show-menu-tablet");
    } else {
      setShow(false);
      menu.current.classList.remove("show-menu");
      menuTablet.current.classList.remove("show-menu-tablet");
    }
  };
  
  const getCountry = (e) => {
    setCountry(e.target.value);
  };

  const getCountryTablet = (e)=>{
      hideMenu();
      setCountry(e.target.value);
  }

  return (
    <div className="">
      <label className="text-4xl font-bold dark:text-white ">{label}</label>
      <div
        onClick={showMenu}
        className="border-2 dark:border-darkgray dark:bg-dark-background-input rounded-md grid grid-cols-[max-content,max-content,1fr] items-center gap-1 px-2 select-none w-full"
      >
        <img src={icon} alt="Icon" />
        {country ? (
          <p className="mt-1 text-2xl dark:text-white font-bold capitalize">{country}</p>
        ) : (
          <p className="mt-1 text-2xl font-bold text-gray-400">{placeholder}</p>
        )}
        <img className="justify-self-end dark:invert" src={IconArrow} alt="" />
      </div>

      <div
        ref={menu}
        className="md:hidden fixed opacity-0 translate-y-full transition-all min-h-screen flex flex-col items-center justify-end top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)]"
      >
        <div className="flex flex-col w-[90%] items-center">
          <div className="w-full bg-white dark:bg-[#393737] rounded-lg flex max-h-56 scroll-p-1 overflow-x-hidden flex-col items-center">
            {testingArray.map((element) => (
              <MenuItem key={element+"-"+Math.random()} value={element} onClick={getCountry} name={element+"-"}  />
            ))}
          </div>

          <button
            onClick={hideMenu}
            className="bg-white dark:bg-[#393737] dark:text-white text-sky-500 text-3xl p-1 w-full  rounded-xl my-4 "
          >
            <p className="mt-1">Aceptar</p>
          </button>
        </div>
      </div>

      <div
        
        ref={menuTablet}
        className="hidden my-5 rounded-lg dark:border-[#4F4F4F]  border scroll-style flex-col w-full items-center"
      >
        <div className="w-full bg-white dark:bg-[#393737] rounded-lg flex max-h-56 scroll-p-1  overflow-x-hidden flex-col items-center">
          {testingArray.map((element) => (
            <MenuItem key={element+"-"+Math.random()} value={element} onClick={getCountryTablet} name={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
