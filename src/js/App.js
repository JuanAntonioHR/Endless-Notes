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
    const [notificationsData, setNotificationsData] = useState([])
    const [user, setUser] = useState({});
    const [notes, setNotes] = useState([]);
    const [bufferAudios, setBufferAudios] = useState([])
    
    useEffect(() => {
        async function convertTextToMp3(id, title, text, date) {
            try {
                const headers = {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
                
                // Make a request to your server endpoint that utilizes `textToSpeech` library
                const response = await axios.post("http://localhost:3000/api/text-to-speech", {
                    text: text,
                    voice: { languageCode: "es-US", ssmlGender: "NEUTRAL" },
                    audioConfig: { audioEncoding: "MP3" },
                }, headers);

                // Handle the response, for example, play the audio or save it to a file
                console.log(response.data);

                // Generate a new audio element
                const bufferAudioItem = {
                    id: id,
                    audioContent: response.data.audioContent
                };

                // Add the new audio element to the state
                setBufferAudios((prevState) => [...prevState, bufferAudioItem]);

                // Parse the date to node cron format
                const [datePart, timePart] = date.split('T');
                const [year, month, day] = datePart.split('-').map(Number);
                const [hour, minute, second] = timePart.slice(0, 8).split(':').map(Number);

                const cronExpression = `${minute} ${hour} ${day} ${month} *`;

                // Add elements to notificationsData array
                setNotificationsData((prevState) => [...prevState, {
                    title: title,
                    // Only the first 15 characters of the text
                    text: text.substring(0, 30) + '...',
                    time: cronExpression,
                    audioFileName: id
                }]);

            } catch (error) {
                console.error(error);
            }
        }

        // Generate audio for each note
        notes.forEach((note) => {
            convertTextToMp3(note.id_nota, note.titulo, note.texto, note.fecha);
        });

    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, setNotes, user, setUser, notification, setNotification, bufferAudios, notificationsData }}>
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