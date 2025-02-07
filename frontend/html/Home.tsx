import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Navbar from '../html/Navbar'


const Home: React.FC = () => {
    return (
        <>
           <Navbar/>
            <div className="home-container">
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <div>
                    <h1>Welcome to BidMe</h1>
                    <p className="home-subtitle">Discover unique items and bid to win!</p>
                    {/* Assuming 'Join Now' leads to a signup page, use Link from react-router-dom */}
                    <Link to="/signup">
                        <button className="home-join">Join Now!</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
