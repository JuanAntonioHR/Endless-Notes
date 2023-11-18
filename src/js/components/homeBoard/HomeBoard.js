import React from "react";
import './homeBoard.css'

import NewNote from "../newNote/NewNote";
import MainBoard from "../mainBoard/MainBoard";

export default function HomeBoard() {
    return (
        <div className="board-section">
            <NewNote />
            <MainBoard />
        </div>
    )
}