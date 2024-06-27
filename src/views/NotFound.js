import React from 'react';
import Header from '../components/Header.js';
import Container from '../components/Container.js';

const NotFound = () => {
    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <Container>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for could not be found.</p>
            </Container>
        </div>
    );
};

export default NotFound;