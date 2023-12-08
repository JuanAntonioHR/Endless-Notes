import React from "react";

// Views
import Index from "./views/Index/Index";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import SQuestion from "./views/SQuestion/SQuestion";
import Alarm from "./views/Alarm/Alarm";

// Router
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// Styles
import './app.css';

export default function App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/squestion" element={<SQuestion />} />
                <Route path="/alarm" element={<Alarm />} />
            </Routes>
        </Router>
    )
}