import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./views/Home.js";
import About from "./views/About.js";
import Blog from "./views/Blog.js";
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            {/* Static routes */}
            <Route path="/" exact element={<Home />} />
            <Route path="/about/:who" element={<About />} />

            {/* dynamic routes  params :title */}
            <Route path="/blog/:title" element={<Blog/>} />

            {/* Not found page */}
            <Route path="*" element={<>Not found</>} />
        </Routes>
    </BrowserRouter>
);