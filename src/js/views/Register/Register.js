import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../../../assets/images/endless-notes-icon.png';
import footBanner from '../../../../assets/images/foot_banner.svg';
import './register.css';

export default function Register(){
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones
        if (!name || !lastName || !email || !confirmEmail || !password) {
            alert("Todos los campos son obligatorios");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email !== confirmEmail) {
            alert("Formato de correo electrónico incorrecto o los correos no coinciden");
            return;
        }

        if (password.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre: name + ' ' + lastName, correo: email, contrasena: password }),
            });
    
            const data = await response.json();
            console.log(data);

            if (data.code === 201) {
                alert(data.message);
                navigate("/login");
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
            <div className= "screen">
                <div className="form-container">
                    <form className="form-card" onSubmit={handleSubmit}>
                        <div className="icon">
                            <img src={icon} alt="icon" />
                        </div>
                        <div className="text-field">
                            <input type="text" placeholder="Nombre(s)" maxLength="50" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="text-field">
                            <input type="text" placeholder="Apellido(s)" maxLength="50" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className="text-field">
                            <input type="text" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="text-field">
                            <input type="text" placeholder="Confirmar correo" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}/>
                        </div>
                        <div className="text-field">
                            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-button">
                            <button type="submit">Registrarse</button>
                        </div>
                    </form>
                </div>
                <div className="foot-banner">
                    <img src={footBanner} alt="banner" />
                </div>
             </div>
        );
}