import React from 'react';
import { Header } from '../components/Header.js';
import { useParams } from 'react-router-dom';
import Container from '../components/Container.js';


const Blog = () => {

    let { page } = useParams();

    return (
        <div className='h-screen dark:bg-slate-950'>
            <Header/>
            <Container>
                <div>Welcome to Blogs!</div>
            </Container>
        </div>
    );
}

export default Blog;