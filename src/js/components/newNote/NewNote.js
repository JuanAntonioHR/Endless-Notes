import React, { useState, useContext } from 'react';
import { NotesContext } from '../../App';
import './newNote.css';

export default function NewNote() {
    const [remaining, setRemaining] = useState(100);
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const { user, setNotes } = useContext(NotesContext);

    const id_usuario = user.id_usuario;

    const handleInputChange = (event) => {
        setRemaining(100 - event.target.value.length);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!titulo || !texto || !date || !time) {
            alert('Please fill out all fields.');
            return;
        }

        const fecha = date + ' ' + time;
        const note = { titulo, texto, fecha, id_usuario };

        fetch('http://localhost:3000/notas/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(note),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Nota subida correctamente');

                // Modifica el array de notas
                // Actualiza el estado local con la nueva nota
                setNotes(prevNotes => [...prevNotes, data.newNote]);

                // Limpia los campos
                setTitulo('');
                setTexto('');
                setDate('');
                setTime('');
                setRemaining(100);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="new-note-section">
            <div className="new-note-container">
                <div className="new-note-title">
                    <h1>Nueva Nota</h1>
                </div>
                <form className="new-note-card" onSubmit={handleSubmit}>
                    <div className="input-title">
                        <input type="text" placeholder="Título" maxLength="30" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="note-date-inputs">
                        <div className="note-date">
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className="note-time">
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>
                    </div>
                    <div className="note-text">
                        <textarea
                            placeholder="Escribe una nota"
                            maxLength="100"
                            value={texto}
                            onChange={(e) => { 
                                setTexto(e.target.value)
                                handleInputChange(e)
                            }}
                        />
                        <p>{remaining} / 100</p>
                    </div>
                    <div className="note-button">
                        <button type="submit">Crear nota</button>
                    </div>
                </form>
            </div>
        </div>
    )
}