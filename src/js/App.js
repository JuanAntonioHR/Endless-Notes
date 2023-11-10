import React from "react";

// Views
import Index from "./views/Index/Index";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";

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
            </Routes>
        </Router>
    )
}