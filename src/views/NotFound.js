import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for could not be found.</p>
        </div>
    );
};

export default NotFound;