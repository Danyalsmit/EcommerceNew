import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="header bg-black text-white text-sm flex justify-center">
      <div className="flex w-[60%] ml-80 justify-between pl-[80] pr-8 py-2">
        <div className="">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold">ShopNow</span>
        </div>
        <div className="flex gap-2">
          English
          <Image src="/ArrowDown.svg" alt="Arrowdown " width={10} height={5} />
        </div>
      </div>
    </div>
  );
}

export default Header;
