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
            <Route path="/about-us" element={<About />} />

            {/* dynamic routes  params :title */}
            {/* <Route path="/:title" element={<Blog/>} /> */}
            <Route path="/blogs" element={<Blog/>} />
            <Route path="/projects" element={<Blog/>} />

            {/* Not found page */}
            <Route path="*" element={<>Not found</>} />
        </Routes>
    </BrowserRouter>
);