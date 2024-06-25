import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { SEO } from '../components/SEO.js';
import { Container } from '../components/Container.js';
import { Footer } from '../components/Footer.js';

const Home = () => {
    const test = {
        hey: "Home"
    }
    return (
        <>
            <Header/>
            <Container>
                <SEO/>
                <div>Welcome to HTML!</div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;