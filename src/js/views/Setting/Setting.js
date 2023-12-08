import React from 'react'
import Header from '../../components/shared/header/Header'
import './setting.css'

export default function Setting() {
    return (
        <div className="screen">
            <Header id_usuario={0}/>
                <div className="screen2">
                    <div className="settings">
                        <h1>Configuración</h1>
                        <div className="options">
                            <div className="configure">Cambiar pregunta de seguridad </div>
                            <div className="configure">
                                Notificaciones 
                                <select>
                                    <option>Activadas</option>
                                    <option>Desactivadas</option>
                                </select>
                            </div>
                            
                            <div className="configure">Ayuda </div>
                            <div className="configure">Política de privacidad </div>
                            <div className="configure">Condiciones de servicio </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}