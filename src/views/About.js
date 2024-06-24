import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { SEO } from '../components/SEO.js';

class About extends React.Component {
    render() {
        const test  = {
            hey: "About"
        }
        return (
            <>
                <SEO/>
                <Header data={test}/>
                <div>Welcome to About!</div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </>
        );
    }
}

export default About;