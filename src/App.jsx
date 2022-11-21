import axios from "axios";
import { useEffect, useState } from "react";
import DarkMode from "./components/DarkMode";
import Display from "./components/Display";
import Error from "./components/Error";
import { Input } from "./components/Input";
import Menu from "./components/Menu";
import { IconCity, IconWorld } from "./icons";

function App() {
  const [city, saveCity] = useState('');
  const [error, setError] = useState(false);
  const [country, saveCountry] = useState('');
  const [listCountry, setListCountry] = useState([]);
  const [weather, setWeather] = useState({
    temp: '',
    weather: '',
    condition: '',
    location: '',
  })

  useEffect(()=>{
    axios.get('https://countriesnow.space/api/v0.1/countries').then(({data})=>{
      let countries = data.data;
      let array = [];
      countries.forEach((c)=>{
        array.push(c.country);
      })
      setListCountry(array);
    })
  },[])

  useEffect(()=>{
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[])

  const sendData = ()=>{
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: city+", "+country},
      headers: {
        'X-RapidAPI-Key': 'faa4a87090msh5cee2feb7372145p161606jsnd789d482bdf5',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(({data})=>{
      if(data.location.country.toLowerCase().trim() !== country.toLowerCase().trim()) {
        setError(1)
        return false;
      };
      console.log(data);
      setWeather({...weather,
        weather: data.current.condition.text,
        temp: data.current.temp_c,
        condition: data.current.condition,  
        location: data.location,  
      })
    })
  }

  const buttonClick = ()=>{
    if(!country || !city){
        setError(2)
        return false;
    }
    setError(0);
    sendData();
  }
  
  return (
    <>
      <DarkMode />    
      <h1 className="hidden text-center text-8xl font-bold md:block mb-12 mt-5 dark:text-white">
        Cima React App
      </h1> 
      <div>
        <div className="md:flex md:justify-center">
          <div className="md:w-[90%]  grid grid-rows-2  md:grid-cols-2  md:grid-rows-none overflow-x-hidden">
            <div className="flex md:h-full w-full md:justify-center">
              <Display location={weather.location} condition={weather.condition} day={weather.weather} temp={weather.temp} />
            </div>

            <div className="flex md:block md:col-start-1 md:col-end-2 md:row-start-1">
              <div className="relative flex flex-col w-full">
                <div className="absolute md:hidden dark:bg-dark-background  bg-white w-full min-w-[200%] -translate-x-16 h-[312px] top-0 -mt-32 blur-2xl"></div>

                <div className="md:dark:bg-dark-background-input dark:bg-dark-background  rounded-lg bg-white p-4 relative z-10 h-full flex flex-col gap-6">
                  {error ? <Error text={error === 1 ? 'No se encuentra esa ciudad !' : 'Debes llenar todos los campos'} /> : null}
                  <div className="flex flex-col gap-12">
                    <Input
                      saveCity={saveCity}
                      icon={IconCity}
                      placeholder={"Ciudad"}
                      label={"Introduzca una ciudad"}
                    />
                    <Menu
                      testingArray={listCountry}
                      saveCountry={saveCountry}
                      icon={IconWorld}
                      placeholder={"Pais"}
                      label={"Selecciona un pais"}
                    />
                  </div>

                  <div className="flex items-end">
                    <button 
                    onClick={buttonClick}
                    className="w-full bg-yellow-btn py-2 px-4 rounded-lg  flex items-center justify-center font-bold text-black text-2xl transition-all hover:translate-y-2 active:translate-y-2 ">
                      <p className="mt-1">Buscar Clima</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
