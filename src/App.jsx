import { useEffect, useState } from "react";
import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButtons from "./Components/TopButtons";
import getFormattedWeatherData from "./services/weatherService";
const App = () => {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const data = await getFormattedWeatherData({ q: "lucknow" }).then(
      (data) => {
        setWeather(data);
      }
    );
    //console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  getWeather();

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to to-blue-700">
      <TopButtons />
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast />
          <Forecast />
        </>
      )}
    </div>
  );
};

export default App;
