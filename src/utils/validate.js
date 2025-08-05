import { useState } from "react";

export const validateForm = (email, password) => {
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\S]{8,}$/.test(
    password
  );

  if (!validEmail) {
    return "Invalid Email Id";
  }
  if (!validPassword) {
    return "Invalid Password";
  }

  return null;
};
