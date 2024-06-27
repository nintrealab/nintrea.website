import React from 'react';
import { Header } from '../components/Header.js';
import { Container } from '../components/Container.js';

const Projects = () => {

    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <Container>
                <div>Welcome to Projects!</div>
            </Container>
        </div>
    );
}

export default Projects;