import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

function Hero() {
  const images = [
    { id: 1, url: "/images/1.jpg" },
    { id: 2, url: "/images/2.jpg" },
    { id: 3, url: "/images/3.jpg" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="hero">
      <Slider {...sliderSettings}>
        {images.map((image) => (
          <div key={image.id} className="carousel-slide">
            <img src={image.url} alt={`Slide ${image.id}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>Build stunning user interfaces with React.js!</p>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
