"use client";

import * as Style from "../page.style";
import React, { useState } from "react";

const SuccessfulLogin = () => {
  return (
    <Style.LoginContent>
      <Style.LoginTitle>Login successful</Style.LoginTitle>
      <div style={{ width: "5rem", height: "5rem" }}>
        <img src="/Success.svg" alt="logo" />
      </div>
      <Style.Inputs> Now you can share your memories! </Style.Inputs>
    </Style.LoginContent>
  );
};

export default SuccessfulLogin;
