import React from "react";
import Headeritem from "./Headeritem";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row mb-5 justify-between items-center h-auto p-7 text-slate-300 text-sm">
      <div className="flex flex-grow justify-start max-w-2x1">
        <MenuIcon className="w-6" />
        <Headeritem title="Disney+Hotstar" />
        <Headeritem title="Tv" />
        <Headeritem title="Movies" />
        <Headeritem title="Sports" />
        <Headeritem title="Disney+" />
        <Headeritem title="KiDS" />
      </div>
      <div className="flex flex-grow justify-end mr-5">
        <div className="flex border border-slate-300 border-x-0 border-t-0 mr-5">
          <input
            className="outline-none bg-inherit mb-1"
            placeholder="Search"
          ></input>
          <SearchIcon className="w-4 mb-0.8" />
        </div>
        <button class="bg-blue-500 text-white font-small px-3 rounded mr-5 text-xs">
          SUBSCRIBE
        </button>
        <p>LOGIN</p>
      </div>
    </header>
  );
};

export default Header;
