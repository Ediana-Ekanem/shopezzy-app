import React from "react";

const Card = ({ data }) => {
  return (
    <div className="md:grid grid-cols-4 gap-5 my-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-[270px] h-[350px] bg-white shadow px-6 relative hover:shadow-md"
        >
          <div className="flex justify-center items-center w-full h-52 overflow-hidden my-7 py-2">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-contain"
            />
            {item.discountTag && (
              <p className="absolute w-10 h-10 left-1 top-1 text-sm text-white grid place-content-center bg-red-400 rounded-full">
                {item.discountTag}
              </p>
            )}
          </div>
          <h3 className="text-lg font-bold mt-2">{item.title}</h3>
          <div className="flex gap-3">
            <p className="text-sm text-red-600 line-through">#{item.prevAmt}</p>
            <p className="text-sm text-gray-800">#{item.currentAmt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
