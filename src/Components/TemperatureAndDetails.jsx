import { FaThermometerHalf } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TbBrandTailwind } from "react-icons/tb";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerHalf,
      title: "Feels Like",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: WiHumidity,
      title: "Humidity",
      value: `${humidity.toFixed()} %`,
    },
    {
      id: 3,
      Icon: TbBrandTailwind,
      title: "Wind Speed",
      value: `${speed} ${units === "metric" ? "km/hr" : "m/s"}`,
    },
  ];
  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: FaTemperatureArrowDown,
      title: "Low",
      value: `${temp_min}°`,
    },
    {
      id: 4,
      Icon: FaTemperatureArrowUp,
      title: "High",
      value: `${temp_max}°`,
    },
  ];
  return (
    <div>
      <div
        className="flex items-center justify-center py-6 text-2xl font-bold
        text-black"
      >
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img
          className="flex items-center justify-center size-70 w-50 h-50"
          src={icon}
          alt="weather icon"
        />
        <p className="text-4xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={28} className="mr-1" />
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
