import React from 'react';
import '../css/profile.css'
import Navbar from './Navbar'



const Profile: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="profile-info">
                    <div className="profile-image">
                        <img src="user.jpg" alt="User Image" />
                    </div>
                    <div className="user-details">
                        <h2>Name: John Doe</h2>
                        <p>Username: johndoe123</p>
                    </div>
                </div>
                <div className="profile-actions">
                    <button onClick={() => window.location.href = 'create_auction.html'}>Create Auction</button>
                    <button onClick={() => window.location.href = '#'}>Update Password</button>
                </div>
                <h3>My Auctions</h3>
                <div className="auction-list">
                    <div className="auction-card">
                        <h4>Auction 1</h4>
                        <p>Description of Auction 1 goes here.</p>
                        <p>Starting Price: $100</p>
                        <p>Current Price: $120</p>
                        <p>Start Time: 10:00 AM</p>
                        <p>End Time: 12:00 PM</p>
                        <p>Status: Ongoing</p>
                    </div>
                    <div className="auction-card">
                        <h4>Auction 2</h4>
                        <p>Description of Auction 2 goes here.</p>
                        <p>Starting Price: $50</p>
                        <p>Current Price: $70</p>
                        <p>Start Time: 11:00 AM</p>
                        <p>End Time: 1:00 PM</p>
                        <p>Status: Concluded</p>
                    </div>
                    <div className="auction-card">
                        <h4>Auction 2</h4>
                        <p>Description of Auction 2 goes here.</p>
                        <p>Starting Price: $50</p>
                        <p>Current Price: $70</p>
                        <p>Start Time: 11:00 AM</p>
                        <p>End Time: 1:00 PM</p>
                        <p>Status: Concluded</p>
                    </div>
                    <div className="auction-card">
                        <h4>Auction 2</h4>
                        <p>Description of Auction 2 goes here.</p>
                        <p>Starting Price: $50</p>
                        <p>Current Price: $70</p>
                        <p>Start Time: 11:00 AM</p>
                        <p>End Time: 1:00 PM</p>
                        <p>Status: Concluded</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
