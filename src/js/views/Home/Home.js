import React from "react";
import Header from "../../components/shared/header/Header";
import HomeBoard from "../../components/homeBoard/HomeBoard";

export default function Home() {

  return (
    <div className="screen">
      <Header id_usuario={0}/>
      <HomeBoard id_usuario={0}/>
    </div>
  )
}