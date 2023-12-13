import React, { useContext, useEffect } from "react";
import { NotesContext } from '../../../App';
import { Link, useNavigate } from "react-router-dom";
import icon from '../../../../../assets/images/endless-notes-icon.png';
import user_icon from '../../../../../assets/images/user-icon.svg';
import navbar_extension from '../../../../../assets/images/navbar-extension.svg';
import './header.css'

export default function Header() {
    const navigate = useNavigate();
    const { user, bufferAudios, notificationsData } = useContext(NotesContext);

    function generateAudios() {
        electron.audioFileApi.sendAudioFile(bufferAudios)
        electron.notificationApi.sendNotificationWithAudio(notificationsData)
        navigate("/home");
    };

    function handleLogout() {
        // Borrar token del localStorage
        localStorage.removeItem('token');
        // Redirigir a la página de inicio de sesión
        navigate("/login");
    }

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate("/login");
        }
    }, []);
    
    return (
        <div className="header-section">
            <div className="icon-container">
                <Link to="/home">
                    <img src={icon} alt="icon" />
                </Link>
            </div>
            <div className="navigation-container">
                <div className="navigation-container-top">
                    <button onClick={generateAudios} className="audio-generate">
                        Generar notificaciones
                    </button>
                    <Link to="/profile" className="user-info-container">
                        <div className="user-info-name">
                            <p>Hola, <span>{user.nombre.split(' ')[0]}</span></p>
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
                                <button onClick={handleLogout} className="navbar-item">
                                    Cerrar sesión
                                </button>
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