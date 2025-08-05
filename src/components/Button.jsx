import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, onClick, to, extraClassName, type = "button" }) => {
  return (
    <>
      {to ? (
        <Link to={to}>
          <button
            type={type}
            onClick={onClick}
            className={`text-white bg-red-500 p-2 rounded-md font-semibold tracking-wider flex items-center justify-center text-center w-[100%] ${extraClassName}`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`text-white bg-red-500 p-2 rounded-md font-semibold tracking-wider flex items-center justify-center text-center w-[100%] ${extraClassName}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
