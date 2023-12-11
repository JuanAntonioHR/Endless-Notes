import React from 'react';
import icon from '../../../../assets/images/endless-notes-icon.png';
import './register.css';

export default function Register(){
    return(
            <div className= "screen">
                <div className="form-container">
                    <div className="form-card">
                        <div className="icon">
                        <img src={icon} alt="icon" />
                        </div>

                        <div className="text-field">
                            <input type="text" placeholder="Nombre(s)"/>
                        </div>

                        <div className="text-field">
                            <input type="text" placeholder="Apellido(s)"/>
                        </div>

                        <div className="text-field">
                            <input type="text" placeholder="Correo electrónico"/>
                        </div>

                        <div className="text-field">
                            <input type="text" placeholder="Confirmar correo"/>
                        </div>

                        <div className="text-field">
                            <input type="password" placeholder="Contraseña" />
                        </div>

                        <div className="form-button">
                                    <button>Registrarse</button>
                        </div>

                    </div>
                </div>
             </div>
        );
}