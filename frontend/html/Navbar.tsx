import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar: React.FC = () => {
    const handleLogout = () => {
        localStorage.clear();
    };

    return (
        <div>
            <ul className="navbar-container">
                <span className="navbar-sub-container">
                    <li className="navbar-item"><Link to="/home">Home</Link></li>
                    <li className="navbar-item"><Link to="/browse">Browse</Link></li>
                    <li className='navbar-item'><Link to="/profile">Profile</Link></li>
                    <li className='navbar-item'><Link to="/createAuction">Create Auction</Link></li>
                    <li className='navbar-item'><Link to="/changePassword">Change Password</Link></li>
                </span>
                <span className="navbar-sub-container"> 
                    <li className="navbar-logout"><Link to="/login" onClick={handleLogout}>Logout</Link></li>
                </span>
            </ul>
        </div>
    );
};

export default Navbar;