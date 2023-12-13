import React from 'react';
import './notesContainer.css'

import MainNoteCard from '../mainNoteCard/MainNoteCard';
import NextNotesContainer from '../nextNotesContainer/NextNotesContainer';

export default function NotesContainer({ notas, fecha, refFecha, color, notas1, notas2, notas3, date1, date2, date3, next }) {
    let prefix = "Mañana, ";

    if(!next) {
        const fechaActual = new Date();
    
        if (fechaActual.getDate() === refFecha.getDate() && fechaActual.getMonth() === refFecha.getMonth() && fechaActual.getFullYear() === refFecha.getFullYear()) {
            prefix = "Hoy, ";
        }

        prefix += fecha;
    } else {
        prefix = "Proximamente";
    }

    return (
        <div className="notes-container">
            <div className="notes-container-title">
                <h1>{prefix}</h1>
            </div>
            <div className="notes-card-container" style={{ backgroundColor: color }}>
                {
                    !next ? (
                        // Generate notes-card for each note
                        notas.map((nota) => {
                            return (
                                <MainNoteCard key={nota.id_nota} id={nota.id_nota} titulo={nota.titulo} texto={nota.texto} fecha={nota.fecha} />
                            );
                        })
                    ) : (
                        <div className="next-notes-section">
                            <NextNotesContainer date={date1} notex={notas1}/>
                            <NextNotesContainer date={date2} notex={notas2}/>
                            <NextNotesContainer date={date3} notex={notas3}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}