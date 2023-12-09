import React from "react";
import bell from '../../../../assets/images/campana.png';
import './alarm.css';


// Componente Alarm
export default function Alarm() {
  return (
    <div className="screen">
      <div className="form-container">
        <div className="form-card">
        <img src={bell} alt="icon" className="bell-icon" />
        <div className="time">
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
