import React, { useState, useEffect } from 'react';
import axios from 'axios';
import delete_icon from '../../../../assets/images/delete.svg';
import './mainBoard.css'

export default function MainBoard({ id = 0 }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3000/notas/${id}`;
                const response = await axios.get(url);

                // Actualizar el estado con los datos de la respuesta
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log(data)
    // data
//     {code: 200, message: Array(1)}
// code
// : 
// 200
// message
// : 
// Array(1)
// 0
// : 
// audio
// : 
// null
// categoria
// : 
// "Escuela"
// fecha
// : 
// "2023-11-20T16:00:00.000Z"
// id_nota
// : 
// 2
// id_usuario
// : 
// 0
// texto
// : 
// "Realizar el diseño de la aplicación"
// titulo
// : 
// "PRACTICA #5"
// [[Prototype]]
// : 
// Object
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// [[Prototype]]
// : 
// Object

    //Fechas a renderizar
    const tempDate1 = new Date();
    const date1 = new Date().toLocaleDateString('es-ES', {day: 'numeric', month: 'long'});

    const tempDate2 = new Date();
    tempDate2.setDate(tempDate2.getDate() + 1);
    const date2 = tempDate2.toLocaleDateString('es-ES', {day: 'numeric', month: 'long'});

    const tempDate3 = new Date();
    tempDate3.setDate(tempDate3.getDate() + 2);
    const date3 = tempDate3.toLocaleDateString('es-ES', {day: 'numeric', month: 'long'});

    const tempDate4 = new Date();
    tempDate4.setDate(tempDate4.getDate() + 3);
    const date4 = tempDate4.toLocaleDateString('es-ES', {day: 'numeric', month: 'long'});

    const tempDate5 = new Date();
    tempDate5.setDate(tempDate5.getDate() + 4);
    const date5 = tempDate5.toLocaleDateString('es-ES', {day: 'numeric', month: 'long'});

    // Assuming `response.data` is your notes array
    const notes = [data.message];
    console.log(notes);

    // Convert date strings to Date objects for comparison
    const noteDates = notes.map(note => new Date(note.fecha));

    // Create arrays for each day
    const notesDate1 = notes.filter((note, i) => noteDates[i].getDate() === tempDate1.getDate() && noteDates[i].getMonth() === tempDate1.getMonth() && noteDates[i].getFullYear() === tempDate1.getFullYear()).slice(0, 2);
    const notesDate2 = notes.filter((note, i) => noteDates[i].getDate() === tempDate2.getDate() && noteDates[i].getMonth() === tempDate2.getMonth() && noteDates[i].getFullYear() === tempDate2.getFullYear()).slice(0, 2);
    const notesDate3 = notes.filter((note, i) => noteDates[i].getDate() === tempDate3.getDate() && noteDates[i].getMonth() === tempDate3.getMonth() && noteDates[i].getFullYear() === tempDate3.getFullYear()).slice(0, 2);
    const notesDate4 = notes.filter((note, i) => noteDates[i].getDate() === tempDate4.getDate() && noteDates[i].getMonth() === tempDate4.getMonth() && noteDates[i].getFullYear() === tempDate4.getFullYear()).slice(0, 2);
    const notesDate5 = notes.filter((note, i) => noteDates[i].getDate() === tempDate5.getDate() && noteDates[i].getMonth() === tempDate5.getMonth() && noteDates[i].getFullYear() === tempDate5.getFullYear()).slice(0, 2);
    
    console.log(notesDate1);

    return (
        <div className="notes-section">
            <div className="notes-container">
                <div className="notes-container-title">
                <h1>Hoy, {date1}</h1>
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
            <div className="notes-container">
                <div className="notes-container-title">
                <h1>Mañana, {date2}</h1>
                </div>
                <div className="notes-card-container">
                <div className="notes-card">
                    <div className="notes-time">
                    <p>8:00 AM</p>
                    </div>
                    <div className="notes-title">
                    <p>ACTIVIDAD #2</p>
                    </div>
                    <div className="notes-text">
                    <p>Finalizar el trabajo</p>
                    </div>
                    <div className="notes-button">
                    <button>Eliminar</button>
                    </div>
                </div>
                <div className="notes-card">
                    <div className="notes-time">
                    <p>4:30 PM</p>
                    </div>
                    <div className="notes-title">
                    <p>PROYECTO #7</p>
                    </div>
                    <div className="notes-text">
                    <p>Entregar el proyecto</p>
                    </div>
                    <div className="notes-button">
                    <button>Eliminar</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="notes-container">
                <div className="notes-container-title">
                <h1>Próximamente</h1>
                </div>
                <div className="next-notes-section">
                <div className="next-notes-container">
                    <div className="next-notes-title">
                    <p>{date3}</p>
                    </div>
                    <div className="next-notes-card">
                    <ul>
                        <li>
                        <div className="next-notes-text">
                            <p>6:30 PM <span>Dentista</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                        </li>
                        <li>
                        <div className="next-notes-text">
                            <p>10:00 PM <span>Reunión</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="next-notes-container">
                    <div className="next-notes-title">
                    <p>{date4}</p>
                    </div>
                    <div className="next-notes-card">
                    <ul>
                        <li>
                        <div className="next-notes-text">
                            <p>4:00 PM <span>Exámen Artes Visuales</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                        </li>
                        <li>
                        <div className="next-notes-text">
                            <p>6:00 PM <span>Partido vs Química</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="next-notes-container">
                    <div className="next-notes-title">
                    <p>{date5}</p>
                    </div>
                    <div className="next-notes-card">
                    <ul>
                        <li>
                        <div className="next-notes-text">
                            <p>9:00 AM <span>Ir al super</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                        </li>
                        <li>
                        <div className="next-notes-text">
                            <p>11:00 AM <span>Revisión de examen de historia</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                        </li>
                        <li>
                        <div className="next-notes-text">
                            <p>11:00 AM <span>Revisión de examen</span></p>
                        </div>
                        <div className="next-notes-button">
                            <button>
                            <img src={delete_icon} alt="delete-icon" />
                            </button>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}