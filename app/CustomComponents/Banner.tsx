import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="Banner-container w-full flex p-10 gap-8">
      {/* Banner1 */}
      <div className="Banner-a relative border border-black w-full h-[300px] rounded-lg overflow-hidden">
        <Image
          src="/BlueBackground.svg"
          alt="Background Banner"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="card-content relative z-10 text-white flex flex-col items-start m-5 w-[50%] h-full">
          <h3 className="text-2xl font-bold">
            The Best Platform for Car Rental
          </h3>
          <p className="mt-4 text-xs text-white text-justify ">
            Ease of doing car rental safely and reliably. Of course at a low
            price.
          </p>
          <Button className="rent-car BackgroundSecond mt-6" variant="outline">
            Rental Car
          </Button>
        </div>
        <div className="absolute bottom-10 right-0 w-[300px]">
          <Image
            src="/BannerCar.svg"
            alt="BannerCar"
            width={300}
            height={150} // Adjust height as needed
            objectFit="contain" // Ensure proper scaling
          />
        </div>
      </div>

      {/* Banner2 */}

      <div className="Banner-b relative border border-black w-full h-[300px] rounded-lg overflow-hidden ">
        <Image
          src="/BlueBackground.svg"
          alt="Background Banner"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="card-content relative z-10 text-white flex flex-col items-start m-5 w-[50%] h-full">
          <h3 className="text-2xl font-bold">
            Easy way to rent a car at a low price
          </h3>
          <p className="mt-4 text-xs text-white text-justify ">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Button className="rent-car BackgroundSecond mt-6" variant="outline">
            Rental Car
          </Button>
        </div>
        <div className="absolute bottom-10 right-0 w-[300px]">
          <Image
            src="/BannerCar.svg"
            alt="BannerCar"
            width={300}
            height={150} // Adjust height as needed
            objectFit="contain" // Ensure proper scaling
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
