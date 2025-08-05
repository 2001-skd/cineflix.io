import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ to }) => {
  return (
    <Link to={to}>
      <p className="logo text-red-500 font-extrabold text-5xl tracking-wide text-shadow-2xs text-shadow-red-500">
        Cineflix
      </p>
    </Link>
  );
};

export default Logo;
