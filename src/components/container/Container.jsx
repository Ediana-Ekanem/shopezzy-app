import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-2xl mx-auto md:max-w-full px-5 md:px-14">
      {children}
    </div>
  );
};

export default Container;
