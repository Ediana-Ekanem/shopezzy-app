import React from "react";
import cart from "/assets/icons/cart.svg";
import available from "/assets/icons/available.svg";
import secure from "/assets/icons/secure.svg";
import payment from "/assets/icons/payment.svg";
import logistics from "/assets/icons/logistics.svg";
import Container from "../../container/Container";
import { FaPlusCircle } from "react-icons/fa";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const icons = [
  {
    src: cart,
    alt: "cart-logo",
    text: "Affordable Goods",
  },
  {
    src: payment,
    alt: "payment-logo",
    text: "Easy/Safe Payment Goods",
  },
  {
    src: logistics,
    alt: "logistics-logo",
    text: "Effective logistics",
  },
  {
    src: secure,
    alt: "secure-logo",
    text: "Secure",
  },
  {
    src: available,
    alt: "available-logo",
    text: "Available/24/7",
  },
];

const Banner = React.memo(() => {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="flex justify-between items-center py-3">
          <div className="flex flex-col items-center">
            <Link to="/postAd">
              <button className="flex flex-col items-center">
                <BiSolidMessageSquareAdd className="text-blue-500 text-2xl md:text-6xl rounded-lg border-4 border-blue-500 p-0 grid place-items-center" />
                <p className="text-sm md:text-md text-blue-600 mt-1 font-Montserrat">
                  Post Ads
                </p>
              </button>
            </Link>

            <Link to="/postItems">
              <button className="flex flex-col items-center">
                <FaPlusCircle className="text-green-600 text-3xl md:text-6xl rounded-full border-4 border-green-600 p-1 grid place-items-center" />
                <p className="text-sm md:text-md text-green-600 mt-1 font-Montserrat">
                  Post Items
                </p>
              </button>
            </Link>
          </div>
          {icons.map(({ src, alt, text }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-8 md:w-20">
                <img src={src} alt={alt} className="w-full h-full" />
              </div>
              <p className="font-semibold hidden md:block">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
});

export default Banner;
