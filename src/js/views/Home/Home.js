import React from "react";
import Header from "../../components/shared/header/Header.js";
import HomeBoard from "../../components/homeBoard/HomeBoard.js";

export default function Home() {
  return (
    <div className="screen">
      <Header />
      <HomeBoard />
    </div>
  )
}