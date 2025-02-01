import React from "react";
import Card from "../CustomComponents/Card";
import { Slider } from "@/components/ui/slider";
import Sidenav from "../CustomComponents/Sidenav";

function page() {
  return (
    <div className="Sidebar flex flex row gap-4 ">
      <Sidenav />
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
