import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

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
    
    useEffect(() => {
        async function convertTextToMp3(id, text) {
            try {
            id = 0;
            text = "Hello world";

            // Assume `textToSpeech` library is used on the server side
            // Make a request to your server endpoint that utilizes `textToSpeech` library
            const response = await axios.post("http://localhost:3000/api/text-to-speech", {
                text: text,
                voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
                audioConfig: { audioEncoding: "MP3" },
            });

            // Handle the response, for example, play the audio or save it to a file
            console.log(response.data);
            } catch (error) {
            console.error(error);
            }
        }

        // Call the function
        convertTextToMp3();
    }, []); // Ensure this effect runs only once when the component mounts         

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