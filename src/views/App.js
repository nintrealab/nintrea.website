import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { SEO } from '../components/SEO.js';

class App extends React.Component {
    render() {
        const test  = {
            hey: "Home"
        }
        return (
            <>
                <SEO/>
                <Header data={test}/>
                <div>Welcome to HTML!</div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </>
        );
    }
}

export default App;