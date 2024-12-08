import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="Navbar-container bg-white flex justify-center border-b border-black py-4">
      <div className="navbar bg-white text-black flex justify-between w-[80%]">
        <div className="Logo flex items-center font-semibold text-base ">
          Exclusive
        </div>
        <div className="nav flex">
          <ul className="nav-list flex gap-8 items-center text-sm">
            <li>Home </li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="Search flex gap-4">
          <div className="Search-input border flex gap-6 text-xs bg-[#F5F5F5] opacity-50 pl-6 pr-2 py-2">
            What are you looking for?
            <Image src="/Search.svg" alt="Cart " width={20} height={5} />
          </div>
          <Image src="/Wishlist.svg" alt="Wishlist " width={25} height={5} />
          <Image src="/Cart1.svg" alt="Cart " width={25} height={5} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
