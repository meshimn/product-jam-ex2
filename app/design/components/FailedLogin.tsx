"use client";

import * as Style from "../page.style";
import React, { useState } from "react";

//@ts-ignore
const FailedLogin: React.FC<{ setView: (view: string) => void }> = ({
  setView,
}) => {
  return (
    <Style.LoginContent>
      <Style.LoginTitle success={false}>Login failed</Style.LoginTitle>
      <div style={{ width: "5rem", height: "5rem" }}>
        <img src="/Fail.svg" alt="logo" />
      </div>
      <Style.ForgotPass onClick={() => setView("login")}>
        please try again
      </Style.ForgotPass>
    </Style.LoginContent>
  );
};

export default FailedLogin;
