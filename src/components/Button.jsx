import React from "react";

const Button = ({ children, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="text-white bg-red-500 p-2 rounded-md font-semibold tracking-wider flex items-center justify-center text-center"
    >
      {children}
    </button>
  );
};

export default Button;
