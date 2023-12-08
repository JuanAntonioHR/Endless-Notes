import React from "react";
import './alarm.css';


// Componente Alarm
export default function Alarm() {
  return (
    <div className="screen">
      <div className="form-container">
        <div className="form-card">
          <div className="time">
            {/*Aqui trate de importar la imagen de la campana pero no pude*/}
            <img className="bell-icon" src="..." alt="Campana" /> 
            <h1>10:00 AM</h1>
          </div>
          <p className="security-message">
            PRACTICA #5 ESTRUCTURA DE DATOS
          </p>
          <div className="form-button">
            <button>Finalizar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
