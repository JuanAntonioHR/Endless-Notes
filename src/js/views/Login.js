import React from "react";
import footBanner from "../../../assets/images/foot_banner.svg";

export default function Login() {
  return (
    <>
      <h1>Login View</h1>
      <div className="foot-banner">
        <img src={footBanner} alt="foot banner" />
      </div>
    </>
  )
}