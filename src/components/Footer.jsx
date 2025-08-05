import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="footer bg-black flex items-center justify-between p-5">
      <Logo />
      <div className="author text-white text-2xl">Created By Santhakumar</div>
    </section>
  );
};

export default Footer;
