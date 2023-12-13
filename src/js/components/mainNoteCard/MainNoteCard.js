import React, { useContext } from 'react'
import { NotesContext } from '../../App'
import axios from 'axios';
import './mainNoteCard.css'

export default function MainNoteCard({ fecha, titulo, texto, id }) {
    const { notes, setNotes } = useContext(NotesContext);

    //formato de var fecha: 2023-11-25T16:00:00.000Z
    //Sacar solo la hora
    let time = fecha.split("T");
    time = time[1].split(".");
    time = time[0];

    // Fecha con formato: 00:00 AM/PM
    time = time.split(":");
    let hour = time[0];
    let minutes = time[1];
    
    if (hour > 12) {
        hour -= 12;
        time = `${hour}:${minutes} PM`;
    } else {
        time = `${hour}:${minutes} AM`;
    }
    
    return (
        <div className="notes-card">
            <div className="notes-time">
                <p>{time}</p>
            </div>
            <div className="notes-title">
                <p>{titulo}</p>
            </div>
            <div className="notes-text">
                <p>{texto}</p>
            </div>
            <div className="notes-button">
                <button onClick={() => {
                    if (window.confirm(`Estas seguro que quieres eliminar la nota: ${titulo}?`)) {
                        const headers = {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`
                            }
                        }
                        
                        axios.delete(`http://localhost:3000/notas/${id}`, headers)
                            .then(response => {
                                // Modify notes array
                                const newNotes = notes.filter((note) => note.id_nota !== id);
                                setNotes(newNotes);
                            })
                            .catch(error => {
                                console.error('There has been a problem with your fetch operation:', error);
                            });
                    }
                }}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}