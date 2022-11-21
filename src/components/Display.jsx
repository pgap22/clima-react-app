import React from "react";
const Display = ({ day, temp, condition, location }) => {
  if (!day) {
    return (
      <div
        className={`bg-blue-500 md:bg-white md:dark:bg-transparent md:border border-white shadow-lg flex justify-center items-center -mt-32 w-full  md:col-start-2 md:col-end-3 md:max-h-[350px] md:min-h-[350px]  md:max-w-xs rounded-2xl md:mt-0 `}
      >
        <h1 className="block md:hidden text-center text-5xl font-bold text-white">Clima React App</h1>
        <h1 className="md:block hidden text-center text-3xl font-bold dark:text-white ">Esperando a un clima</h1>
      </div>
    );
  }

  return (
    <div
      className={`${day}  md:border dark:md:border-white dark:md:bg-transparent bg-sunny flex justify-center items-center -mt-32 w-full py-5  md:col-start-2 md:col-end-3 md:max-h-[350px] md:min-h-[350px] md:max-w-xs rounded-2xl md:mt-0 `}
    >
      <div className="flex flex-col justify-center items-center max-w-sm w-full min-h-[450px] md:flex-col md:min-h-fit ">
        <div className="flex md:flex-col md:items-center justify-around w-full">
          <h1 className="text-white text-7xl md:text-9xl">{temp}°C</h1>
          <img src={condition.icon} alt="IconSunny" />
        </div>
        <p className="text-white text-3xl font-bold text-center mx-3">{`${location.country}, ${location.name} ${location.region}`}</p>
      </div>
    </div>
  );  
};

export default Display;
