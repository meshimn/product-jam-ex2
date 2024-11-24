"use client";

import * as Style from "../page.style";
import React, { useState } from "react";

// @ts-ignore
const ForgotPassword: React.FC<{ setView: (view: string) => void }> = ({
  setView,
}) => {
  return (
    <Style.LoginContent>
      <Style.LoginTitle>Forgot your Password?</Style.LoginTitle>
      <Style.Info>
        Enter your phone number and we’ll send you link to rest your password
      </Style.Info>

      <form onSubmit={(e) => e.preventDefault()}>
        <Style.Inputs>
          <label htmlFor="forgot-phone">
            Phone number
            <Style.StyledInput
              id="forgot-phone"
              type="phone"
              placeholder="+972"
              required
            />
          </label>
          <Style.StyledButton type="submit">Send</Style.StyledButton>
        </Style.Inputs>
      </form>
      <Style.ForgotPass>Did not get a message?</Style.ForgotPass>
    </Style.LoginContent>
  );
};

export default ForgotPassword;
