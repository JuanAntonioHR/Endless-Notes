import React, { useState, useEffect, useContext } from "react";
import { NotesContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import footBanner from '../../../../assets/images/foot_banner.svg';
import icon from '../../../../assets/images/endless-notes-icon.png';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(NotesContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      const data = await response.json();
      console.log(data);

      if (data.code === 200) {
        setUser(data.user);
        localStorage.setItem('token', data.message);
        navigate("/home");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="screen">
      <div className="form-container">
        <div className="form-card">
          <div className="icon">
            <img src={icon} alt="icon" />
            <h1>Endless Notes</h1>
          </div>
          <div className="text-field">
            <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="text-field">
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-button">
            <button type="submit" className="btn-primary" onClick={handleSubmit}>Iniciar sesión</button>
          </div>
          <div className="section-separator">
            <hr />
            <span>o</span>
            <hr />
          </div>
          <div className="footer-card">
            <button className="tiny-link" onClick={() => alert('In development')}>Olvidé mi contraseña</button>
            <div className="signup-section">
              <p>¿No tienes una cuenta?</p>
              <Link to="/register" className="link">Regístrate</Link>
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