import React from "react";
import Carousel from "./Carousel";
import Category from "../category/Category";
import Container from "../../container/Container";

const HeroSection = () => {
  const bannerImages = [
    "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/aygvthaepmunafoqip2d.png",
    "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/hsbvko58hqejac3x1wa2.png",
    "https://res.cloudinary.com/dminu0vmy/image/upload/v1721297145/eyfvwtex6qauwenz3ldw.png",
  ];

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between my-5">
        <div className="flex flex-col flex-grow order-2 md:order-1 items-center justify-center">
          <Category />
        </div>
        <div className="flex flex-col flex-grow-[2] order-1 md:order-2 px-3">
          <Carousel />
          <div className="hidden md:flex justify-between mt-3 space-x-2">
            {bannerImages.map((src, index) => (
              <div key={index} className="w-full md:w-1/3">
                <img
                  src={src}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
