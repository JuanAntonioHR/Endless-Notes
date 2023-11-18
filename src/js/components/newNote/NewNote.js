import React, { useState } from 'react';
import './newNote.css';

export default function NewNote() {
    const [remaining, setRemaining] = useState(100);

    const handleInputChange = (event) => {
        setRemaining(100 - event.target.value.length);
    };

    return (
        <div className="new-note-section">
            <div className="new-note-container">
                <div className="new-note-title">
                    <h1>Nueva Nota</h1>
                </div>
                <div className="new-note-card">
                    <div className="input-title">
                        <input type="text" placeholder="Título" maxLength="30" />
                    </div>
                    <div className="note-date-inputs">
                        <div className="note-date">
                            <input type="date" />
                        </div>
                        <div className="note-time">
                            <input type="time" />
                        </div>
                    </div>
                    <div className="note-text">
                        <textarea 
                        placeholder="Escribe una nota" 
                        maxLength="100" 
                        onChange={handleInputChange}
                        />
                        <p>{remaining} / 100</p>
                    </div>
                    <div className="note-button">
                        <button>Crear nota</button>
                    </div>
                </div>
            </div>
        </div>
    )
}