import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { SEO } from '../components/SEO.js';
import { useParams } from 'react-router-dom';


const Blog = () => {

    let { title } = useParams();

    return (
        <>
            <SEO/>
            <Header data={title}/>
            <div>Welcome to {title} Blog</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </>
    );
}

export default Blog;