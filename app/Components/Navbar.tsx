import React from "react";

function Navbar() {
  return (
    <div className="Navbar-container bg-white flex justify-center ">
      <div className="navbar bg-white text-black flex justify-between w-[80%]">
        <div className="Logo">Logo</div>
        <div className="nav">
          <ul className="nav-list flex gap-8">
            <li>Home </li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="Search">Search</div>
      </div>
    </div>
  );
}

export default Navbar;
