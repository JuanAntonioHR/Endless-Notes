import React from "react";
import Index from "./views/Index";
import Login from "./views/Login";
import './app.css';

import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default function App() {
    
    return (
        <Router>
            <div className="screen">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    )
}