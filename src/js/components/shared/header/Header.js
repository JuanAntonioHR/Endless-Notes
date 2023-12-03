import React from "react";
import { Link } from "react-router-dom";
import icon from '../../../../../assets/images/endless-notes-icon.png';
import user_icon from '../../../../../assets/images/user-icon.svg';
import navbar_extension from '../../../../../assets/images/navbar-extension.svg';
import './header.css'

export default function Header() {
    const name = "Chuchito";

    return (
        <div className="header-section">
            <div className="icon-container">
                <Link to="/home">
                    <img src={icon} alt="icon" />
                </Link>
            </div>
            <div className="navigation-container">
                <div className="navigation-container-top">
                    <Link to="/profile" className="user-info-container">
                        <div className="user-info-name">
                            <p>Hola, <span>{name}</span></p>
                        </div>
                        <div className="user-info-avatar">
                            <img src={user_icon} alt="user-icon" />
                        </div>
                    </Link>
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
                                <Link to="/home" className="navbar-item">Inicio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}