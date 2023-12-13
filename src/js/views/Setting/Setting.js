import React, { useContext } from 'react'
import { NotesContext } from '../../App';
import { Link } from "react-router-dom";
import './setting.css'

import Header from '../../components/shared/header/Header'

export default function Setting() {
    const { setNotification, notification } = useContext(NotesContext);

    const handleNotification = (e) => {
        if (e.target.value === 'true') {
            setNotification(true)
        } else {
            setNotification(false)
        }
    }

    return (
        <div className="screen">
            <Header />
                <div className="screen2">
                    <div className="settings">
                        <h1>Configuración</h1>
                        <div className="options">
                            <Link to='/squestion' className="configure">Cambiar pregunta de seguridad</Link>
                            <div className="configure" id='select'>
                                Notificaciones 
                                <select onChange={(e) => handleNotification(e)} value={notification}>
                                    <option value="true">Activadas</option>
                                    <option value="false">Desactivadas</option>
                                </select>
                            </div>
                            <button className="configure" onClick={() => alert('In development')}>Ayuda</button>
                            <button className="configure" onClick={() => alert('In development')}>Política de privacidad</button>
                            <button className="configure" onClick={() => alert('In development')}>Condiciones de servicio</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}