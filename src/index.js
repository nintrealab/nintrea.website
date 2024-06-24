import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import App from "./views/App.js";
import About from "./views/About.js";
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<App />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
);