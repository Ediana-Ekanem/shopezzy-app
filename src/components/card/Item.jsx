import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/useCart";

const Item = ({ data, itemType }) => {
  const { addToCart } = useCart();

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-600">No items available.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 my-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col w-[280px] h-[350px] bg-white shadow-md px-6 relative hover:shadow-lg transition-shadow"
        >
          <Link
            to={`/${itemType}/${item.id}`}
            className="flex justify-center items-center w-full h-52 overflow-hidden mt-3 py-2"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-contain"
            />
            {item.discountTag && (
              <p className="absolute w-10 h-10 left-2 top-1 text-sm text-white grid place-content-center bg-red-400 rounded-full">
                {item.discountTag}
              </p>
            )}
          </Link>
          <h3 className="text-lg font-bold mt-2">{item.title}</h3>
          <div className="flex items-center space-x-10 mt-2">
            <p className="text-lg font-semibold text-gray-800">
              #{item.currentAmt}
            </p>
            {item.prevAmt && (
              <p className="text-sm text-red-600 line-through">
                #{item.prevAmt}
              </p>
            )}
          </div>
          <button
            className="hidden group-hover:flex justify-center items-center w-full py-2 bg-blue-500 text-white transition-opacity duration-300 mt-2"
            onClick={() => addToCart(item)}
            aria-label={`Add ${item.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Item;
