import React, { useContext, useState } from 'react'
import { NotesContext } from '../../App';
import Header from '../../components/shared/header/Header'
import './profile.css'

export default function Profile() {
    const { user } = useContext(NotesContext);
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
            
        } catch (error) {
            console.error(error);
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
                        <button>Eliminar cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}