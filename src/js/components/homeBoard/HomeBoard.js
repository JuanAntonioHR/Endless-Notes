import React from "react";
import './homeBoard.css'

import NewNote from "../newNote/NewNote";
import MainBoard from "../mainBoard/MainBoard";

export default function HomeBoard({ id_usuario }) {
    return (
        <div className="board-section">
            <NewNote id_usuario={id_usuario}/>
            <MainBoard id={id_usuario}/>
        </div>
    )
}