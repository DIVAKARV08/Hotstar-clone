import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Coursel = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      stopOnHover={true}      
    >
      <div className="flex">
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/old_images/SHOW/8962/8962/8962-h" />
      </div>
      <div>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4829/1104829-h-c77a42dd58ca" />
      </div>
      <div>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/8857/1058857-h-69906000acd9" />
      </div>
      <div>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4603/1104603-h-788dec723da4" />
      </div>
      <div>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/old_images/SHOW/1646/1646/1646-h" />
      </div>
    </Carousel>
  );
};

export default Coursel;
