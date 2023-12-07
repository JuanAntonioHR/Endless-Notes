import React from "react";

// Views
import Index from "./views/Index/Index";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";

// Router
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// Styles
import './app.css';
import Setting from "./views/Setting/Setting";

export default function App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </Router>
    )
}