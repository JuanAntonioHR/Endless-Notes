import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Views
import Index from "./views/Index/Index";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Register from "./views/Register/Register";
import SQuestion from "./views/SQuestion/SQuestion";
import Alarm from "./views/Alarm/Alarm";
import Board from "./views/Board/Board"

// Router
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// Styles
import './app.css';
import Setting from "./views/Setting/Setting";

// Context
export const NotesContext = createContext();

export default function App() {
    const [notification, setNotification] = useState(true)
    const [user, setUser] = useState({
        "id_usuario": 0,
        "nombre": "Juan Antonio Herrera de la Rosa",
        "correo": "juanin10toni@gmail.com",
        "contrasena": "$2b$13$uGhHvXttcd4rLK0rH5ZmH.HzFmV9aFL8Q.YA1JuKfM7TZLmd24e0C",
        "respuesta": "Naranja",
        "pregunta": "Color favorito"
    });
    const [notes, setNotes] = useState([]);
    const [bufferAudios, setBufferAudios] = useState([])
    
    useEffect(() => {
        async function convertTextToMp3(id, text) {
            try {
                // Make a request to your server endpoint that utilizes `textToSpeech` library
                const response = await axios.post("http://localhost:3000/api/text-to-speech", {
                    text: text,
                    voice: { languageCode: "es-US", ssmlGender: "NEUTRAL" },
                    audioConfig: { audioEncoding: "MP3" },
                });

                // Handle the response, for example, play the audio or save it to a file
                console.log(response.data);

                // Generate a new audio element
                const bufferAudioItem = {
                    id: id,
                    audioContent: response.data.audioContent
                };

                // Add the new audio element to the state
                setBufferAudios((prevState) => [...prevState, bufferAudioItem]);

            } catch (error) {
            console.error(error);
            }
        }

        // Generate audio for each note
        notes.forEach((note) => {
            convertTextToMp3(note.id_nota, note.texto);
        });

    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, setNotes, user, setUser, setNotification, bufferAudios }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/board" element={<Board />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/squestion" element={<SQuestion />} />
                    <Route path="/alarm" element={<Alarm />} />
                </Routes>
            </Router>
        </NotesContext.Provider>
    );
}