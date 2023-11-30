import React from 'react';
import './notesContainer.css'

import MainNoteCard from '../mainNoteCard/MainNoteCard';
import NextNotesContainer from '../nextNotesContainer/NextNotesContainer';

export default function NotesContainer(props) {
    let prefix = "Mañana, ";

    if(!props.prefix) {
        const fechaActual = new Date();
    
        if (fechaActual.getDate() === props.refFecha.getDate() && fechaActual.getMonth() === props.refFecha.getMonth() && fechaActual.getFullYear() === props.refFecha.getFullYear()) {
            prefix = "Hoy, ";
        }

        prefix += props.fecha;
    } else {
        prefix = "Proximamente";
    }

    return (
        <div className="notes-container">
            <div className="notes-container-title">
                <h1>{prefix}</h1>
            </div>
            <div className="notes-card-container" style={{ backgroundColor: props.color }}>
                {
                    !props.prefix ? (
                        // Generate notes-card for each note
                        props.notas.map((nota) => {
                            return (
                                <MainNoteCard key={nota.id_nota} id={nota.id_nota} titulo={nota.titulo} texto={nota.texto} fecha={nota.fecha} />
                            );
                        })
                    ) : (
                        <div className="next-notes-section">
                            <NextNotesContainer date={props.date1} notes={props.notas1}/>
                            <NextNotesContainer date={props.date2} notes={props.notas2}/>
                            <NextNotesContainer date={props.date3} notes={props.notas3}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}