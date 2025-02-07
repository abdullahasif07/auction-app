import React from 'react';
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2" ><Link to="/home">Home</Link></li>
                            <li className="nav-item mx-2"><Link to="/browse">Browse</Link></li>
                            <li className="nav-item mx-2"><Link to="/profile">Profile</Link></li>
                            <li className="nav-item mx-2"><Link to="/createAuction">Create Auction</Link></li>
                            <li className="nav-item mx-2"><Link to="/changePassword">Change Password</Link></li>
                            <li className="nav-item mx-2"><Link to="/specificAuction">Specific Auction</Link></li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <span className="sub-container">
                        <button className="btn btn-outline-success mx-2"><Link to="/">Logout</Link></button>
                        </span>
                    </div>
                </div>
            </nav>

        </>
    );
};



export default Navbar;
