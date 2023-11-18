import React from 'react'
import './mainNoteCard.css'

export default function MainNoteCard(id = 1, titulo = "PRACTICA #5", texto = "Realizar el diseño de la aplicación", fecha = "2023-11-20 10:00:00") {

    let time = fecha.split(" ")[1];

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
        <div key={id} className="notes-card">
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
                <button>Eliminar</button>
            </div>
        </div>
    )
}