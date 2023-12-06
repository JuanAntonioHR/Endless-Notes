import React, { useContext } from 'react'
import { NotesContext } from '../../App.js'
import trash_icon from '../../../../assets/images/trash-icon.svg'
import './boardNote.css'

export default function BoardCard({ id, titulo, fecha }){
    const { notes, setNotes } = useContext(NotesContext)
    
    const date = fecha.split('T')[0]
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
        <div className="board-note">
            <p className="board-note-date">
                {date}
            </p>
            <p className="board-note-time">
                {time}
            </p>
            <p className="board-note-title">
                {titulo}
            </p>
            <button className='board-note-delete' onClick={() => {
                    if (window.confirm(`Estas seguro que quieres eliminar la nota ${titulo}?`)) {
                        fetch(`http://localhost:3000/notas/${id}`, { method: 'DELETE' })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                }
                                // Modify notes array
                                const newNotes = notes.filter((note) => note.id_nota !== id);
                                setNotes(newNotes);
                            })
                            .catch(error => {
                                console.error('There has been a problem with your fetch operation:', error);
                            });
                    }
                }}>
                <img src={trash_icon} alt="trash-icon" />
            </button>
        </div>
    )
}