import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from '../../../../assets/images/endless-notes-icon.png';
import user_icon from '../../../../assets/images/user-icon.svg';
import navbar_extension from '../../../../assets/images/navbar-extension.svg';
import delete_icon from '../../../../assets/images/delete.svg';
import './home.css';

const name = "Chuchito";
const date1 = "10 de septiembre";
const date2 = "11 de septiembre";
const date3 = "12 de septiembre";
const date4 = "13 de septiembre";
const date5 = "14 de septiembre";

export default function Home() {
  const [remaining, setRemaining] = useState(100);

  const handleInputChange = (event) => {
    setRemaining(100 - event.target.value.length);
  };

  return (
    <div className="screen">
      <div className="header-section">
        <div className="icon-container">
          <img src={icon} alt="icon" />
        </div>
        <div className="navigation-container">
          <div className="navigation-container-top">
            <div className="user-info-container">
              <div className="user-info-name">
                <p>Hola, <span>{name}</span></p>
              </div>
              <div className="user-info-avatar">
                <img src={user_icon} alt="user-icon" />
              </div>
            </div>
          </div>
          <div className="navbar-section">
            <div className="navbar-extension">
              <img src={navbar_extension}/>
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <Link to="/login" className="navbar-item">Cerrar sesión</Link>
                </li>
                <li>
                  <Link to="/setting" className="navbar-item">Configuración</Link>
                </li>
                <li>
                  <Link to="/board" className="navbar-item">Tablón</Link>
                </li>
                <li>
                  <Link to="/notas" className="navbar-item">Notas</Link>
                </li>
                <li>
                  <Link to="/home" className="navbar-item">Inicio</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="board-section">
        <div className="new-note-section">
          <div className="new-note-container">
            <div className="new-note-title">
              <h1>Nueva Nota</h1>
            </div>
            <div className="new-note-card">
              <div className="input-title">
                <input type="text" placeholder="Título" maxLength="30" />
              </div>
              <div className="note-date-inputs">
                <div className="note-date">
                  <input type="date" />
                </div>
                <div className="note-time">
                  <input type="time" />
                </div>
              </div>
              <div className="note-text">
                <textarea 
                  placeholder="Escribe una nota" 
                  maxLength="100" 
                  onChange={handleInputChange}
                />
                <p>{remaining} / 100</p>
              </div>
              <div className="note-button">
                <button>Crear nota</button>
              </div>
            </div>
          </div>
        </div>
        <div className="notes-section">
          <div className="notes-container">
            <div className="notes-container-title">
              <h1>Hoy, {date1}</h1>
            </div>
            <div className="notes-card-container">
              <div className="notes-card">
                <div className="notes-time">
                  <p>10:00 AM</p>
                </div>
                <div className="notes-title">
                  <p>PRACTICA #5</p>
                </div>
                <div className="notes-text">
                  <p>Realizar el diseño de la aplicación</p>
                </div>
                <div className="notes-button">
                  <button>Eliminar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="notes-container">
            <div className="notes-container-title">
              <h1>Mañana, {date2}</h1>
            </div>
            <div className="notes-card-container">
              <div className="notes-card">
                <div className="notes-time">
                  <p>8:00 AM</p>
                </div>
                <div className="notes-title">
                  <p>ACTIVIDAD #2</p>
                </div>
                <div className="notes-text">
                  <p>Finalizar el trabajo</p>
                </div>
                <div className="notes-button">
                  <button>Eliminar</button>
                </div>
              </div>
              <div className="notes-card">
                <div className="notes-time">
                  <p>4:30 PM</p>
                </div>
                <div className="notes-title">
                  <p>PROYECTO #7</p>
                </div>
                <div className="notes-text">
                  <p>Entregar el proyecto</p>
                </div>
                <div className="notes-button">
                  <button>Eliminar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="notes-container">
            <div className="notes-container-title">
              <h1>Próximamente</h1>
            </div>
            <div className="next-notes-section">
              <div className="next-notes-container">
                <div className="next-notes-title">
                  <p>{date3}</p>
                </div>
                <div className="next-notes-card">
                  <ul>
                    <li>
                      <div className="next-notes-text">
                        <p>6:30 PM <span>Dentista</span></p>
                      </div>
                      <div className="next-notes-button">
                        <button>
                          <img src={delete_icon} alt="delete-icon" />
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="next-notes-text">
                        <p>10:00 PM <span>Reunión</span></p>
                      </div>
                      <div className="next-notes-button">
                        <button>
                          <img src={delete_icon} alt="delete-icon" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="next-notes-container">
                <div className="next-notes-title">
                  <p>{date4}</p>
                </div>
                <div className="next-notes-card">
                  <ul>
                    <li>
                      <div className="next-notes-text">
                        <p>4:00 PM <span>Exámen Artes Visuales</span></p>
                      </div>
                      <div className="next-notes-button">
                        <button>
                          <img src={delete_icon} alt="delete-icon" />
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="next-notes-text">
                        <p>6:00 PM <span>Partido vs Química</span></p>
                      </div>
                      <div className="next-notes-button">
                        <button>
                          <img src={delete_icon} alt="delete-icon" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="next-notes-container">
                <div className="next-notes-title">
                  <p>{date5}</p>
                </div>
                <div className="next-notes-card">
                  <ul>
                    <li>
                      <div className="next-notes-text">
                        <p>9:00 AM <span>Ir al super</span></p>
                      </div>
                      <div className="next-notes-button">
                        <button>
                          <img src={delete_icon} alt="delete-icon" />
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="next-notes-text">
                        <p>11:00 AM <span>Revisión de examen de historia</span></p>
                      </div>
                      <div className="next-notes-button">
                        <button>
                          <img src={delete_icon} alt="delete-icon" />
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="next-notes-text">
                        <p>11:00 AM <span>Revisión de examen</span></p>
                      </div>
                      <div className="next-notes-button">
                        <button>
                          <img src={delete_icon} alt="delete-icon" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}