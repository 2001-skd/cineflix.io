import React, { useState } from "react";

const Input = ({ type = "text", placeholder, value, onChange, ref }) => {
  const [showPassword, setShowPassword] = useState(false);

  function handleTogglePwd() {
    setShowPassword((prev) => !prev);
    if (type === "password" && showPassword) {
      showPassword ? (type = "text") : (type = "password");
    }
  }
  return (
    <div className="flex bg-white w-full items-center justify-center">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-full rounded-sm p-3 flex items-center justify-center"
        value={value}
        onChange={onChange}
        ref={ref}
      />
      {type === "password" && (
        <i className="cursor-pointer" onClick={handleTogglePwd}>
          {showPassword ? "🔓" : "🔐"}
        </i>
      )}
    </div>
  );
};

export default Input;
