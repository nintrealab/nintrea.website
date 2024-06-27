import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { SEO } from '../components/SEO.js';
import { Container } from '../components/Container.js';

const Home = () => {

    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <Container>
                <SEO/>
                <div>Welcome to HTML!</div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </Container>
        </div>
    );
}

export default Home;