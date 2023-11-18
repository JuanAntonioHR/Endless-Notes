import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './notesContainer.css'

export default function NotesContainer() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Función asincrónica para realizar la solicitud GET
        const fetchData = async () => {
            try {
                // Realizar la solicitud GET a la API
                const response = await axios.get('https://');
                
                // Actualizar el estado con los datos de la respuesta
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setLoading(false);
            }
        };
    
        // Llamar a la función fetchData cuando el componente se monta
        fetchData();
    }, []); // El segundo argumento [] indica que useEffect se ejecuta solo una vez al montar el componente    

    return (
        <div className="notes-container">
            <div className="notes-container-title">
                <h1>Hoy, {}</h1>
            </div>
            <div className="notes-card-container">
                <div className="notes-card">
                    <div className="notes-time">
                        <p>10:00 AM</p>
                    </div>
                    <div className="notes-title">
                        <p>PRACTICA #5</p>
                    </div>
                    <div className="notes-text">
                        <p>Realizar el diseño de la aplicación</p>
                    </div>
                    <div className="notes-button">
                        <button>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}