import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { SEO } from '../components/SEO.js';
import { useParams } from 'react-router-dom';


const Blog = () => {

    let { title } = useParams();

    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <SEO/>
            <div>Welcome to {title} Blog</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Blog;