import React from "react";
import Index from "./views/Index";
import Login from "./views/Login";

import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default function App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}