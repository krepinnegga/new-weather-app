
import './App.css';
import Forecast from './Components/Forecast';
import Input from './Components/Input';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import TimeAndLocation from './Components/TimeAndLocation';
import TopButtons from './Components/TopButtons';
import getFormattedWeatherData from './Services/WeatherServices';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
     const [query, setQuery] = useState({ q: "london" });
     const [units, setUnits] = useState("metric");
     const [weather, setWeather] = useState(null)
     const [weatherLoaded, setWeatherLoaded] = useState(false);
      
     useEffect(() => {
        const fetchWeather = async () => {
          const message = query.q ? query.q : "current location.";
          toast.info("Fetching weather for " + message);

          await getFormattedWeatherData({...query, units }).then((data) => {
            toast.success(
              `Successfully fetched weather for ${data.name}, ${data.country}.`
            );
            setWeather(data);
            setWeatherLoaded(true);
          });
        }
        fetchWeather();
     }, [query, units]);

     const formatBackground = () => {
      if (!weather) return "from-cyan-700 to-blue-700";
      const threshold = units === "metric" ? 20 : 50;
      if (weather.temp >= threshold) return "from-cyan-700 to-blue-700";

      return "from-yellow-700 to-orange-700";
    };

         
  return (
    <div className={`bg-gradient-to-br text-white ${formatBackground()}`}>

           <TopButtons setQuery={setQuery} />
           <Input setQuery={setQuery} units={units} setUnits={setUnits} />

         {weather && (
          <div>
         <TimeAndLocation weather={weather} />
         <TemperatureAndDetails weather={weather} />

         <Forecast title="hourly forecast" items={weather.hourly} />
         <Forecast title="daily forecast" items={weather.daily} />
          </div>
         )}

       <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
