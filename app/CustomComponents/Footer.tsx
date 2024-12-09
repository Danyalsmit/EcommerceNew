import React from "react";

function Footer() {
  return (
    <div className="Footer bg-white w-full">
      {/* Start Section */}
      <div className="lg:flex">
        <div className="Start w-[80%] p-10 lg: w-[50%]">
          <h1 className="TextSecond font-semibold">Morent</h1>
          <p className=" font text-xs text-justify sm:text-lg pt-2">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Middle Section */}
        <div className="Middle flex flex-wrap justify-between p-10 sm:flex-nowrap sm:gap-32 ">
          <div className="About w-[50%] :">
            <h1 className="font-semibold">About</h1>
            <ul className="flex flex-col font text-xs sm:text-sm pt-2 gap-2">
              <li>How it Works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="Socials w-[50%]">
            <h1 className="font-semibold">Socials</h1>
            <ul className="flex flex-col  sm:text-sm font text-xs pt-2 gap-2">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="Community pt-5 w-[50%] sm:p-0 md:p-0 lg:pt-0">
            <h1 className="font-semibold">Community</h1>
            <ul className="flex flex-col font sm:text-sm text-xs pt-2 gap-2">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
        </div>
      </div>

      {/* End Section (Footer Links) */}

      <div className="End lg:border flex-row-reverse  bt-black p-5 justify-between flex gap-4 flex-wrap font text-xs font-semibold">
        <div>Privacy & Policy</div>
        <div>Terms & Condition</div>
        <div>©2022 MORENT. All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
