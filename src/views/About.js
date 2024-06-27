import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { SEO } from '../components/SEO.js';

const About = () => {
    const test  = {
        hey: "About"
    }
    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <SEO/>
            <div>Welcome to About!</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default About;