const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Kolkata",
    },
    {
      id: 2,
      title: "Lucknow",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Delhi",
    },
    {
      id: 5,
      title: "Chandigarh",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
