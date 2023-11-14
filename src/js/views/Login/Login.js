import React from "react";
import { Link } from "react-router-dom";
import footBanner from '../../../../assets/images/foot_banner.svg';
import icon from '../../../../assets/images/endless-notes-icon.png';
import './login.css';

export default function Login() {
  return (
    <div className="screen">
      <div className="form-container">
        <div className="form-card">
          <div className="icon">
            <img src={icon} alt="icon" />
            <h1>Endless Notes</h1>
          </div>
          <div className="text-field">
            <input type="text" placeholder="Correo electrónico" />
          </div>
          <div className="text-field">
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="form-button">
            <button>Iniciar sesión</button>
          </div>
          <div className="section-separator">
            <hr />
            <span>o</span>
            <hr />
          </div>
          <div className="footer-card">
            <Link to="/reset" className="tiny-link">Olvidé mi contraseña</Link>
            <div className="signup-section">
              <p>¿No tienes una cuenta?</p>
              <Link to="/signup" className="link">Regístrate</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-banner">
        <img src={footBanner} alt="banner" />
      </div>
    </div>
  )
}