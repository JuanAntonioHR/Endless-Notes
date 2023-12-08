import React from 'react'
import Header from '../../components/shared/header/Header'
import './profile.css'

export default function Profile() {
    return (
        <div className="screen">
            <Header id_usuario={0}/>
            <div className="screen3">
                <div className="edit-profile">
                    <h1>Mi cuenta</h1>
                    <div className="edition">
                        <div className="edit">
                            <div className="changes" ><input id="newEmail" type="text" placeholder="Cambiar correo" /></div>
                            <div className="changes"><input id="newName" type="text" placeholder="Cambiar nombre" /></div>
                            <div className="changes"><input id="newPassword" type="password" placeholder="Cambiar contraseña" /></div>
                            <div className="changes"><button Onclick="">Guardar cambios</button></div>                           
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