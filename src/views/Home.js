import React from 'react';
import { Header } from '../components/Header.js';
import { Container } from '../components/Container.js';

const Home = () => {

    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <Container>
                <div>Welcome Home!</div>
            </Container>
        </div>
    );
}

export default Home;