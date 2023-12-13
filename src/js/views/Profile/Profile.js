import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../../App';
import axios from 'axios';
import Header from '../../components/shared/header/Header'
import './profile.css'

export default function Profile() {
    const navigate = useNavigate();

    const { setUser } = useContext(NotesContext);
    const user = JSON.parse(localStorage.getItem('user'));
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
            console.log(newEmail, newName, newPassword);
    
            // const response = await fetch(`http://localhost:3000/user/${user.id_usuario}`, {
            //     method: 'PUT',
            //     headers: {
            //         Authorization: `Bearer ${localStorage.getItem("token")}`
            //     },
            //     body: JSON.stringify({
            //         // if newEmail is undefined, use the old email
            //         correo: newEmail ? newEmail : user.correo,
            //         // if newName is empty, use the old name
            //         nombre: newName ? newName : user.nombre,
            //         // if newPassword is empty, use the old password
            //         contrasena: newPassword ? newPassword : user.contrasena
            //     })
            // });

            const headers = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }

            const response = await axios.put(`http://localhost:3000/user/${user.id_usuario}`, {
                correo: newEmail ? newEmail : user.correo,
                nombre: newName ? newName : user.nombre,
                contrasena: newPassword ? newPassword : user.contrasena
            }, headers);

            const data = await response.data;
            console.log(data);

            if (data.code === 200) {
                alert(data.message);

                if (newEmail) {
                    // Actualizamos el user en localStorage
                    localStorage.setItem('user', JSON.stringify({
                        ...user,
                        correo: newEmail
                    }));
                }
                if (newName) {
                    // Actualizamos el user en localStorage
                    localStorage.setItem('user', JSON.stringify({
                        ...user,
                        nombre: newName
                    }));
                }
                if (newPassword) {
                    // Actualizamos el user en localStorage
                    localStorage.setItem('user', JSON.stringify({
                        ...user,
                        contrasena: newPassword
                    }));
                }
            }
            
            setNewEmail('');
            setNewName('');
            setNewPassword('');
            
        } catch (error) {
            console.error(error);
        }
    }

    function handleDelete() {
        if (window.confirm('¿Estás seguro de que quieres eliminar tu cuenta y todas tus notas? Esta acción no se puede deshacer')) {
            // Borramos todas las notas del usuario
            const headers = {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            }

            axios.delete(`http://localhost:3000/notas/user/${user.id_usuario}`, headers)
                .then(response => {
                    console.log(response.data);

                    if (response.data.code === 200) {
                        axios.delete(`http://localhost:3000/user/${user.id_usuario}`, headers)
                            .then(response => {
                                console.log(response.data);
                                
                                if (response.data.code === 200) {
                                    alert(response.data.message);
                                    localStorage.removeItem('token');
                                    navigate('/login');
                                }
                            })
                            .catch(error => console.error(error));
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