import React from 'react'
import Header from '../../components/shared/header/Header'
import './profile.css'

export default function Profile() {
    return (
        <div>
            <Header id_usuario={0}/>
            <div class="screen">
                <div class="edit-profile">
                    <h1>Mi cuenta</h1>
                    <div class="edition">
                        <div class="edit">
                            <div class="changes"><input type="text" placeholder="Cambiar correo" /></div>
                            <div class="changes"><input type="text" placeholder="Cambiar nombre" /></div>
                            <div class="changes"><input type="password" placeholder="Cambiar contraseña" /></div>
                            <div class="changes"><button>Guardar cambios</button></div>                           
                        </div>
                        <div class="photo">
                            vddagdfgsdfgdf
                        </div>
                    </div>
                    <div class="eliminar">
                        <button>Eliminar cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}