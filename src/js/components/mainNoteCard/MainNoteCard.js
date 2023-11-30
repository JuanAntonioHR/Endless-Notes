import React from 'react'
import './mainNoteCard.css'

export default function MainNoteCard(props) {
    //formato de var fecha: 2023-11-25T16:00:00.000Z
    //Sacar solo la hora
    let time = props.fecha.split("T");
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

    console.log(props.id_nota)

    return (
        <div className="notes-card">
            <div className="notes-time">
                <p>{time}</p>
            </div>
            <div className="notes-title">
                <p>{props.titulo}</p>
            </div>
            <div className="notes-text">
                <p>{props.texto}</p>
            </div>
            <div className="notes-button">
                <button onClick={() => {
                    if (window.confirm('Are you sure you want to delete this note?')) {
                        fetch(`http://localhost:3000/notas/${props.id}`, { method: 'DELETE' })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                }
                                // Reload the page after successful deletion
                                window.location.reload();
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