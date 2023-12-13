import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../../App';
import Header from '../../components/shared/header/Header'
import './profile.css'

export default function Profile() {
    const navigate = useNavigate();

    const { user, setUser } = useContext(NotesContext);
    const [newEmail, setNewEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSaveChanges = async () => {
        try {
            if (!newEmail && !newName && !newPassword) {
                alert('At least one field has to be filled');
                return;
            }

            console.log(user.correo, user.nombre, user.contrasena);
    
            const response = await fetch(`http://localhost:3000/user/${user.id_usuario}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo: newEmail || user.correo,
                    nombre: newName || user.nombre,
                    contrasena: newPassword || user.contrasena
                })
            });
    
            const data = await response.json();
            console.log(data);

            if (data.code === 200) {
                alert(data.message);

                if (newEmail) {
                    setUser({
                        ...user,
                        correo: newEmail
                    });
                }
                if (newName) {
                    setUser({
                        ...user,
                        nombre: newName
                    });
                }
                if (newPassword) {
                    setUser({
                        ...user,
                        contrasena: newPassword
                    });
                }

                setNewEmail('');
                setNewName('');
                setNewPassword('');
            }
            
        } catch (error) {
            console.error(error);
        }
    }

    function handleDelete() {
        if (window.confirm('¿Estás seguro de que quieres eliminar tu cuenta y todas tus notas? Esta acción no se puede deshacer')) {
            // Borramos todas las notas del usuario
            fetch(`http://localhost:3000/notas/user/${user.id_usuario}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.code === 200) {

                    // Borramos al usuario
                    fetch(`http://localhost:3000/user/${user.id_usuario}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if (data.code === 200) {

                            // Borramos el token
                            alert(data.message);
                            localStorage.removeItem('token');
                            navigate('/login');
                        }
                    })
                }
            })
            .catch(error => console.error(error));
        }
    }

    return (
        <div className="screen">
            <Header />
            <div className="screen3">
                <div className="edit-profile">
                    <h1>Mi cuenta</h1>
                    <div className="edition">
                        <div className="edit">
                            <div className="changes" >
                                <input id="newEmail" type="text" placeholder="Cambiar correo" onChange={e => setNewEmail(e.target.value)} />
                            </div>
                            <div className="changes">
                                <input id="newName" type="text" placeholder="Cambiar nombre" onChange={e => setNewName(e.target.value)} />
                            </div>
                            <div className="changes">
                                <input id="newPassword" type="text" placeholder="Cambiar contraseña" onChange={e => setNewPassword(e.target.value)} />
                            </div>
                            <div className="changes">
                                <button onClick={handleSaveChanges}>Guardar cambios</button>
                            </div>
                        </div>
                        <div className="photo">
                            <img src="assets/images/usuario.png" />
                        </div>
                    </div>
                    <div className="eliminar">
                        <button onClick={handleDelete}>Eliminar cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}