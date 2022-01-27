import React from "react";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Movies2({ data }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const renderSlides = () =>
    data.map((data) => (
      <div className="p-2 rounded-xl group cursor-pointer transitiond duration-150 ease-in transform sm:hover:scale-150 hover:z-150">
        <Image
          layout="responsive"
          height={187}
          width={141}
          src={`${BASE_URL}${data.poster_path || data.backdrop_path}`}
          className="p-2 rounded-md"
        />
        {/* <p className="flex items-center opacity-0 group-hover:opacity-100">
          {data.original_title || data.title}
        </p> */}
      </div>
    ));

  return (
    <div className="overflow-visible ">
      <Slider dots={false} slidesToShow={8} slidesToScroll={8}>
        {renderSlides()}
      </Slider>
    </div>
  );
}
