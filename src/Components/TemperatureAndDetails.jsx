import { FaThermometerHalf } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TbBrandTailwind } from "react-icons/tb";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";

const TemperatureAndDetails = () => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerHalf,
      title: "Feels Like",
      value: "22°",
    },
    {
      id: 2,
      Icon: WiHumidity,
      title: "Humidity",
      value: "44%",
    },
    {
      id: 3,
      Icon: TbBrandTailwind,
      title: "Wind Speed",
      value: "3.21 km/h",
    },
  ];
  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: "05:00 AM",
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: "07:15 PM",
    },
    {
      id: 3,
      Icon: FaTemperatureArrowUp,
      title: "High",
      value: "39°",
    },
    {
      id: 4,
      Icon: FaTemperatureArrowDown,
      title: "Low",
      value: "25°",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Rain</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img
          className="flex items-center justify-center w-25 h-25"
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="weather icon"
        />
        <p className="text-5xl">36°C</p>
        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              {`${title}:`}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-10  text-sm py-3">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div
            key={id}
            className="flex flex-row text-sm items-center justify-center"
          >
            <Icon size={30} />
            <p className="font-light ml-1">
              {`${title}:`}
              <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
