import React from "react";
import bell from '../../../../assets/images/bell.svg';
import './alarm.css';


// Componente Alarm
export default function Alarm() {
  return (
    <div className="screen">
      <div className="form-container-alarm">
        <div className="form-card-alarm">
          <img src={bell} alt="icon" className="bell-icon" />
          <div className="alarm-content">
            <div className="time">
              <h1>10:00 AM</h1>
            </div>
            <p className="alarm-title">
              PRACTICA #5
            </p>
            <p className="alarm-text">
              ESTRUCTURA DE DATOS
            </p>
          </div>
          <div className="form-button-alarm">
            <button>Finalizar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
