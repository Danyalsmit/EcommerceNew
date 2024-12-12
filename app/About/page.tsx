import React from "react";
import Card from "../CustomComponents/Card";

function page() {
  const options = [
    { label: "Sport", count: 10, value: "Sport", checked: true },
    { label: "Suv", count: 12, value: "Sport", checked: true },
    { label: "Mpv", count: 16, value: "Sport" },
    { label: "Sedan", count: 20, value: "Sport" },
    { label: "Coupe", count: 14, value: "Sport" },
    { label: "Hatchback", count: 14, value: "Sport" },
  ];

  const options1 = [
    { label: "2Person", count: 10, value: "Sport", checked: true },
    { label: "4Person", count: 14, value: "Sport" },
    { label: "6Personpv", count: 12, value: "Sport" },
    { label: "8Person", count: 26, value: "Sport", checked: true },
  ];
  return (
    <div className="Sidebar flex flex row gap-4 ">
      <div className="sidebarleft md:w-[20%] bg-white pl-5 gap-2 flex flex-col">
        <p>Type</p>
        {options.map((option, index) => (
          <div key={index} className="flex gap-2  items-center">
            <input
              type="checkbox"
              value={option.value}
              id={option.value}
              defaultChecked={option.checked}
            />
            <label htmlFor={option.value} className="cursor-pointer">
              {option.label} <span>({option.count})</span>
            </label>
          </div>
        ))}
        <p>Capacity</p>
        {options1.map((option1, index) => (
          <div key={index} className="flex gap-2  items-center">
            <input
              type="checkbox"
              value={option1.value}
              id={option1.value}
              defaultChecked={option1.checked}
            />
            <label htmlFor={option1.value} className="cursor-pointer">
              {option1.label} <span>({option1.count})</span>
            </label>
          </div>
        ))}
      </div>
      <div className="sidebarright md:w-[80%] gap-4 flex flex row flex-wrap	">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page;
