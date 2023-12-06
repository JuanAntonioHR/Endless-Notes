import React from "react";
import './homeBoard.css'

import NewNote from "../newNote/NewNote.js";
import MainBoard from "../mainBoard/MainBoard.js";

export default function HomeBoard() {
    return (
        <div className="board-section">
            <NewNote /> 
            <MainBoard />
        </div>
    )
}