"use client";

import * as Style from "../page.style";
import React, { useState } from "react";

const Login: React.FC<{ setView: (view: string) => void }> = ({ setView }) => {
  const [errors, setErrors] = useState({ phone: "", password: "" });
  const [attempts, setAttempts] = useState(0); // Track incorrect login attempts

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const newErrors = {
      phone: "",
      password: "",
    };

    // Validation logic for empty fields
    if (phone.trim() === "") {
      newErrors.phone = "Phone number is required*";
    } else if (phone !== "123") {
      newErrors.phone = "Phone number incorrect*";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required*";
    } else if (password !== "123") {
      newErrors.password = "Password incorrect*";
    }

    setErrors(newErrors);

    // Check if there are no validation errors
    const isValid = !newErrors.phone && !newErrors.password;

    if (isValid) {
      // Successful login
      setView("success");
      setAttempts(0); // Reset attempts on successful login
    } else {
      // Increment failed login attempts
      setAttempts((prevAttempts) => {
        const updatedAttempts = prevAttempts + 1;

        // Move to the "failed" state after 3 incorrect attempts
        if (updatedAttempts >= 3) {
          setView("failed");
        }

        return updatedAttempts;
      });
    }
  };

  return (
    <Style.LoginContent>
      <Style.LoginTitle>Long time no see, welcome back!</Style.LoginTitle>
      <form onSubmit={handleLogin}>
        <Style.Inputs>
          {/* Phone Number Input */}
          <label
            htmlFor="phone"
            style={{
              color: errors.phone ? "red" : "inherit", // Red label on error
            }}
          >
            {errors.phone || "Phone number"}
          </label>
          <Style.StyledInput
            id="phone"
            name="phone"
            type="phone"
            placeholder="+972-537628484"
            style={{
              borderColor: errors.phone ? "red" : "initial", // Red border on error
            }}
            className={errors.phone ? "error" : ""}
          />

          {/* Password Input */}
          <label
            htmlFor="password"
            style={{
              color: errors.password ? "red" : "inherit", // Red label on error
            }}
          >
            {errors.password || "Password"}
          </label>
          <Style.StyledInput
            id="password"
            type="password"
            name="password"
            placeholder="xxxxxxxxxx"
            style={{
              borderColor: errors.password ? "red" : "initial", // Red border on error
            }}
            className={errors.password ? "error" : ""}
          />

          {/* Submit Button */}
          <Style.StyledButton type="submit">Login</Style.StyledButton>
        </Style.Inputs>
      </form>
      <Style.ForgotPass onClick={() => setView("forgot")}>
        forgot your password?
      </Style.ForgotPass>
    </Style.LoginContent>
  );
};

export default Login;
