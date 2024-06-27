import React from 'react';
import { Header } from '../components/Header.js';
import Container from '../components/Container.js';

const About = () => {
    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <Container>
                <div>Welcome to About us!</div>
            </Container>
        </div>
    );
}

export default About;