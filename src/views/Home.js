import React from 'react';
import { Header } from '../components/Header.js';
import { Container } from '../components/Container.js';
import HomeHero from '../components/HomeHero.js';

const Home = () => {
    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <HomeHero/>
            <Container>
                Welcome Home
            </Container>
        </div>
    );
}

export default Home;