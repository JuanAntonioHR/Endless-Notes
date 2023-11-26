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
                <button>Eliminar</button>
            </div>
        </div>
    )
}