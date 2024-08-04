import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useCart } from "../cart/useCart"; // Adjust the path as needed

const Item = ({ data, itemType }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  my-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col ms-7 md:ms-0 w-[280px] h-[350px] bg-white shadow px-6 relative hover:shadow-md"
        >
          <Link
            to={`/${itemType}/${item.id}`}
            className="flex justify-center items-center w-full h-52 overflow-hidden my-2 py-2"
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
          <div className="flex items-center space-x-10">
            <p className="text-lg font-semibold text-gray-800">
              #{item.currentAmt}
            </p>
            <p className="text-sm text-red-600 line-through">#{item.prevAmt}</p>
          </div>

          <div>
            <button
              className="hidden mt-1 group-hover:flex justify-center items-center w-full py-2 bg-blue-500 text-white transition-opacity duration-300"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
