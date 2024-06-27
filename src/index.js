import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./views/Home.js";
import About from "./views/About.js";
import Blog from "./views/Blog.js";
import "./styles/app.css";
import Projects from "./views/Projects.js";
import "./lang/i18n.js";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Static routes */}
                <Route path="/" exact element={<Home />} />

                <Route path="/blogs" element={<Blog/>} />
                <Route path="/blogs/:title" element={<Blog/>} />

                <Route path="/projects" element={<Projects/>} />
                <Route path="/projects/:title" element={<Projects/>} />

                <Route path="/about-us" element={<About/>} />
                <Route path="/about-us/:author" element={<About/>} />

                {/* Not found page */}
                <Route path="*" element={<>No found</>} />
            </Routes>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);