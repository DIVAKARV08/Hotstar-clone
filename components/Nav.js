import React from "react";
import request from "../Utills/Request";

import Movies2 from "./Movies2";

const Nav = ({ data }) => {
  // console.log(data);
  return (
    <nav className="relative">
      <div className="px-10 sm:px-1 text-2xl">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <div className="px-10 py-5">
              <h2
                key={key}
                className="cursor-pointer transition duration-100 hover:text-blue-500"
              >
                {title}
              </h2>
              {/* <Items data={data} genere={`${key}`} /> */}
              <Movies2 data={data} />
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
