import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const MyCarousel = ({ data }) => {
  console.log("Data ======", data);
  return (
    <div className="square_slider has-text-centered main-section">
      <Carousel
        responsive={responsive}
        showDots
        swipeable
        draggable
        keyBoardControl
        minimumTouchDrag={80}
        autoPlay={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
      >
        {data.images.map(({ image, title, subtitle }, index) => (
          <div key={index} className="carousel-item">
            <Image
              alt={image.url.alt}
              src={image.url}
              width={500}
              height={500}
              className="carousel-image"
            />
            <div className="carousel-content">
              <h4 className="carousel-title">{title} </h4>
              <p className="carousel-subtitle">{subtitle} </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
