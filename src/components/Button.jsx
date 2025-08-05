import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, onclick, to, extraClassName }) => {
  return (
    <Link to={to}>
      <button
        onClick={onclick}
        className={`text-white bg-red-500 p-2 rounded-md font-semibold tracking-wider flex items-center justify-center text-center w-[100%] ${extraClassName}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
