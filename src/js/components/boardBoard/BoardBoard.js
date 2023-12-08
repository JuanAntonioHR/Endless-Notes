import React, { useContext, useState, useEffect } from 'react'
import { NotesContext } from '../../App'
import './boardBoard.css'
import BoardNote from '../boardCard/BoardNote';

export default function Board() {
    const { notes } = useContext(NotesContext)
    
    return (
        <div className='board-section'>
            <div className="board-table">
                <h1>Tablón</h1>
                <div className="board-card">
                    {notes.map((nota) => (
                        <BoardNote key={nota.id_nota} id={nota.id_nota} titulo={nota.titulo} fecha={nota.fecha}/>
                    ))}
                </div>
            </div>
        </div>
    )
}