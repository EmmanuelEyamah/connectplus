import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>Web Development</h3>
        </div>
        <div>
          <h3>Software Maintenance</h3>
        </div>
        <div>
          <h3>Database Management</h3>
        </div>
        <div>
          <h3>UI/UX Design</h3>
        </div>
        <div>
          <h3>Web3 Design</h3>
        </div>
        <div>
          <h3>Technical Consultancy</h3>
        </div>
        <div>
          <h3>Software Architecture</h3>
        </div>
        <div>
          <h3>Mobile App Developement</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
