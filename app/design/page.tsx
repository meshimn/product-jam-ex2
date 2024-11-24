"use client";

import * as Style from "./page.style";
import React, { useState } from "react";
import Login from "./components/Login";
import SuccessfulLogin from "./components/SuccessfulLogin";
import FailedLogin from "./components/FailedLogin";
import ForgotPassword from "./components/ForgotPassword";

export default function DesignedLoginPage() {
  // Define states for the different views
  const [view, setView] = useState("login");
  const [attempts, setAttempts] = useState(0); // Track incorrect login attempts

  // Increment attempts and check for failure
  const handleFailedAttempt = () => {
    setAttempts((prev) => {
      const newAttempts = prev + 1;
      if (newAttempts >= 3) {
        setView("failed"); // Move to failed view after 3 attempts
      }
      return newAttempts;
    });
  };

  // Render the appropriate bottom component based on the view state
  const renderBottomComponent = () => {
    switch (view) {
      case "login":
        return (
          <Login
            setView={(newView) => {
              if (newView === "failed") {
                handleFailedAttempt(); // Handle incorrect attempts
              } else {
                setView(newView); // Set success or other views
                setAttempts(0); // Reset attempts on successful login
              }
            }}
          />
        );
      case "success":
        return <SuccessfulLogin />;
      case "failed":
        return <FailedLogin setView={setView} />;
      case "forgot":
        return <ForgotPassword setView={setView} />;
      default:
        return null;
    }
  };

  return (
    <Style.Wrapper>
      <Style.StyledVideo autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
      </Style.StyledVideo>
      <Style.BGColor />
      <Style.Content>
        <Style.TopWrapper>
          <div>
            <img src="/Logo.svg" alt="logo" />
          </div>
          <Style.Title>Whatsapp Memories</Style.Title>
          <Style.SecondTitle>The past is just a text away</Style.SecondTitle>
        </Style.TopWrapper>
        <Style.BottomWrapper>{renderBottomComponent()}</Style.BottomWrapper>
      </Style.Content>
    </Style.Wrapper>
  );
}
