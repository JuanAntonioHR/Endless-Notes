import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

// Views
import Index from "./views/Index/Index.js";
import Login from "./views/Login/Login.js";
import Signup from "./views/Signup/Signup.js";
import Home from "./views/Home/Home.js";
import Profile from "./views/Profile/Profile.js";
import Board from "./views/Board/Board.js"

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

    // Text to speech
    useEffect(() => {
        async function convertTextToMp3(id, text) {
            try {
                id = 0;
                text = "Hello world";
        
                const response = await axios.post(
                "https://texttospeech.googleapis.com/v1/text:synthesize",
                {
                    input: { text: text },
                    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
                    audioConfig: { audioEncoding: "MP3" },
                },
                {
                    params: {
                    key: process.env.REACT_APP_GOOGLE_API_KEY, // Set your Google API key
                    },
                }
                );
        
                // Handle the response, for example, play the audio or save it to a file
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        
        // Call the function
        // convertTextToMp3();
    }, [notes]); // Ensure this effect runs only once when the component mounts    

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