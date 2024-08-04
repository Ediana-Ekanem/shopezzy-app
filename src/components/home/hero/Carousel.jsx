import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1717858397/samples/ecommerce/analog-classic.jpg",
    },
    {
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721343053/gd3qtj2lfukjdaygdqki.jpg",
    },
    {
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721343054/gbluwyg6k7z6xngbswoa.jpg",
    },
    {
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1717858407/samples/ecommerce/accessories-bag.jpg",
    },
    {
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721343053/t5x7zs4zg5vkrdp4drjd.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="w-full h-[300px] md:h-[430px] relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-lg bg-center bg-cover bg-no-repeat duration-500"
      ></div>
      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="mx-2">
            <RxDotFilled
              className={`cursor-pointer ${
                slideIndex === currentIndex ? "text-[#feab3a]" : "text-gray-600"
              }`}
              onClick={() => setCurrentIndex(slideIndex)}
              size={25}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
