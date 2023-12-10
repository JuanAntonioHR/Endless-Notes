import React from "react";
import footBanner from '../../../../assets/images/foot_banner.svg';
import icon from '../../../../assets/images/endless-notes-icon.png';
import './squestion.css';

export default function Login() {
  return (
    <div className="screen">
      <div className="form-container-sq">
        <div className="form-card-sq">
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <p className="security-message-sq">
            Para continuar su registro se requiere una pregunta de seguridad para cuando quiera iniciar sesión en diferentes dispositivos.
          </p>
          <div className="text-field-sq">
            <input type="text" placeholder="Pregunta de seguridad" />
          </div>
          <div className="text-field-sq">
            <input type="text" placeholder="Respuesta" />
          </div>
          <div className="form-button-sq">
            <button>Terminar registro</button>
          </div>
        </div>
      </div>
      <div className="foot-banner">
        <img src={footBanner} alt="banner" />
      </div> 
    </div>
  );
}
