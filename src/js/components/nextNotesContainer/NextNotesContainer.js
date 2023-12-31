import React, { useContext } from 'react'
import { NotesContext } from '../../App'
import axios from 'axios';
import delete_icon from '../../../../assets/images/delete.svg';
import './nextNotesContainer.css'

export default function NextNotesContainer({ date, notex }) {
    const { notes, setNotes } = useContext(NotesContext);

    return(
        <div className="next-notes-container">
            <div className="next-notes-title">
                <p>{date}</p>
            </div>
            <div className="next-notes-card">
                <ul>
                    {
                        notex.map((nota) => {
                            //formato de var fecha: 2023-11-25T16:00:00.000Z
                            //Sacar solo la hora
                            let time = nota.fecha.split("T");
                            time = time[1].split(".");
                            time = time[0];

                            // Fecha con formato: 00:00 AM/PM
                            time = time.split(":");
                            let hour = time[0];
                            let minutes = time[1];
                            
                            if (hour >= 12) {
                                if (hour > 12) hour -= 12;
                                time = `${hour}:${minutes} PM`;
                            } else if (hour === 0) {
                                hour = 12;
                                time = `${hour}:${minutes} AM`;
                            } else {
                                time = `${hour}:${minutes} AM`;
                            }

                            return (
                                <li key={nota.id_nota}>
                                    <div className="next-notes-text">
                                        <p>{time} <span>{nota.titulo}</span></p>
                                    </div>
                                    <div className="next-notes-button">
                                        <button onClick={() => {
                                            if (window.confirm(`Estas seguro que quieres eliminar la nota: ${nota.titulo}?`)) {
                                                const headers = {
                                                    headers: {
                                                        Authorization: `Bearer ${localStorage.getItem("token")}`
                                                    }
                                                }

                                                axios.delete(`http://localhost:3000/notas/${nota.id_nota}`, headers)
                                                    .then(response => {
                                                        // Modify notes array
                                                        const newNotes = notes.filter((note) => note.id_nota !== nota.id_nota);
                                                        setNotes(newNotes);
                                                    })
                                                    .catch(error => {
                                                        console.error('There has been a problem with your fetch operation:', error);
                                                    });

                                            }
                                        }}>
                                            <img src={delete_icon} alt="delete-icon" />
                                        </button>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}