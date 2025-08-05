import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-black">
      <Logo />
      <div className="login_btn">
        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Header;
