import React, { createContext, useState, useContext } from "react";

// Views
import Index from "./views/Index/Index";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Board from "./views/Board/Board"

// Router
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// Styles
import './app.css';

// Context
export const NotesContext = createContext();

export default function App() {
    const [user, setUser] = useState({
        "id_usuario": 0,
        "nombre": "Juan Antonio Herrera de la Rosa",
        "correo": "juanin10toni@gmail.com",
        "respuesta": "Naranja",
        "pregunta": "Color favorito"
    });
    const [notes, setNotes] = useState([]);

    return (
        <NotesContext.Provider value={{ notes, setNotes, user, setUser }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/board" element={<Board />} />
                </Routes>
            </Router>
        </NotesContext.Provider>
    );
}