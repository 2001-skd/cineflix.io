import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const NotFound = () => {
  return (
    <section className="w-[100vw] h-[100vh] overflow-hidden flex flex-col gap-5 items-center justify-center bg-black">
      <Logo />
      <h1 className="text-red-500 font-bold text-5xl">Page Not Found!</h1>
      <Button to="/">Go To Home</Button>
    </section>
  );
};

export default NotFound;
