import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { GentlyUsedData } from "./data";
import { useCart } from "../../cart/useCart";
import { FaStar } from "react-icons/fa";

const GentlyUsedDetails = React.memo(() => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the item based on the id from the URL
  const item = useMemo(
    () => GentlyUsedData.find((item) => item.id === parseInt(id)),
    [id]
  );

  if (!item) {
    return <p className="text-center text-red-600 font-bold">Item not found</p>;
  }

  // Memoized handleRatingChange function
  const handleRatingChange = (index) => {
    // Use a callback with the previous state to ensure we are working with the latest state
    const newRating = index + 1;
    const updatedItems = GentlyUsedData.map((it) =>
      it.id === item.id ? { ...it, rating: newRating } : it
    );
    // Temporarily use a local state to update rating without affecting the global data
    // setItems(updatedItems);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="md:flex md:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={item.img}
            alt={item.title}
            className="max-w-full max-h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

          <div className="flex items-center space-x-2 mb-4">
            <span className="text-lg font-semibold text-gray-800">Rating:</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`w-5 h-5 ${
                    index < item.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => handleRatingChange(index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <p className="text-lg font-semibold text-gray-800 mb-2">Price:</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">
              #{item.currentAmt}
            </p>
          </div>
          <p className="text-sm text-red-600 line-through mb-4">
            #{item.prevAmt}
          </p>

          <p className="mt-4 text-base text-gray-700 mb-6">
            {item.description}
          </p>

          <div className="flex items-center space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default GentlyUsedDetails;
