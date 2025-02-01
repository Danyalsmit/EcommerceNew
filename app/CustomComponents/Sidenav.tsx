import React from "react";
import Card from "../CustomComponents/Card";
import { Slider } from "@/components/ui/slider";

function Sidenav() {
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
    <div className="sidebarleft w-[50%] bg-white pl-5 gap-8 flex flex-col">
      <div className="1">
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
      </div>
      <div className="2">
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
      <div className="3">
        <p>Price</p>
        <Slider
          defaultValue={[80]}
          max={100}
          step={1}
          className="TextSecondbg2 w-[70%]"
        />
        <h2>Max$100.00</h2>
      </div>
    </div>
  );
}

export default Sidenav;
