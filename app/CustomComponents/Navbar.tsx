import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="Navbar-container bg-white flex justify-between border-b p-10 py-4">
      <div className="navbar bg-white text-black gap-2 flex flex-col justify-center sm:flex-row sm:gap-16">
        <div className="Logo flex items-center font-semibold text-base ">
          <h1 className="TextSecond font-semibold">Morent</h1>
        </div>
        <div className="Search flex gap-4 rounded-[50px] px-5 bg-[#F5F5F5] border justify-between items-center">
          <div className="Search-input flex gap-6 text-xs pr-10 py-2">
            <Image src="/Search.svg" alt="Cart " width={20} height={5} />
            <p> Search something here</p>
          </div>
          <div>
            <Image src="/filter.svg" alt="filter " width={20} height={5} />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-row sm:gap-4">
        <Image src="/Like.svg" alt="Wishlist " width={25} height={5} />
        <Image src="/Notification.svg" alt="Cart " width={25} height={5} />
        <Image src="/Settings.svg" alt="Cart " width={25} height={5} />
        <Image
          className="rounded-full"
          src="/profile.svg"
          alt="Cart "
          width={25}
          height={5}
        />
      </div>
      <div className="sm:hidden">
        <Image
          className="rounded-full"
          src="/profile.svg"
          alt="Cart "
          width={25}
          height={5}
        />
      </div>
    </div>
  );
}

export default Navbar;
