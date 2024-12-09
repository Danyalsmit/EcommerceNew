import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Card() {
  return (
    <div className="card bg-white rounded border p-2 border rounded-lg overflow-hidden">
      <div className="card-header flex justify-between p-10 items-start">
        <div>
          <h2 className="car-name">Koenigsegg</h2>
          <span className="car-type">Sport</span>
        </div>
        <Image src="/LikeRed.svg" alt="LikeRed " width={25} height={5} />
      </div>
      <div className="flex flex-row p-5 justify-between items-center sm:flex-col p-2">
        <div className="car-image">
          <Image src="/car.svg" alt="Image " width={200} height={30} />
        </div>
        <div className="card-details mt-0 sm:flex justify-between mt-10">
          <div className="detail-item flex gap-2">
            <Image src="/fuelicon.svg" alt="Fuel icon " width={15} height={5} />
            <span className="text-xs">90L</span>
          </div>
          <div className="detail-item flex gap-2">
            <Image src="/Manual.svg" alt="Fuel icon " width={15} height={5} />
            <span className="text-xs">Manual</span>
          </div>
          <div className="detail-item flex">
            <Image
              src="/profile-2user.svg"
              alt="Fuel icon "
              width={15}
              height={5}
            />
            <span className="text-xs">2 People</span>
          </div>
        </div>
      </div>
      <div className="card-footer flex justify-between p-5 items-center">
        <div className="price">
          $99.00 /<span>day</span>
        </div>
        <Button className="rent-now BackgroundSecond" variant="outline">
          Rent Now
        </Button>
      </div>
    </div>
  );
}

export default Card;
