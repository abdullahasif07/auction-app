import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/profile.css'
import Navbar from './Navbar';

interface User {
    name: string;
    username: string;
    auctions: Auction[];
}

interface Auction {
    Title: string;
    Description: string;
    StartingPrice: number;
    CurrentPrice: number;
    StartingTime: Date;
    EndingTime: Date;
}

const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [wonAuctionsCount, setWonAuctionsCount] = useState<number>(0); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const username = localStorage.getItem('username');
            if (username) {
                const response = await axios.get(`http://localhost:8000/user/getUser/${username}`);
                const auctionsResponse = await axios.get(`http://localhost:8000/user/getUserAuctions/${username}`);
                const wonAuctionsResponse = await axios.get(`http://localhost:8000/auction/getWonAuctions/${username}`); 
                setUser({ ...response.data.user, auctions: auctionsResponse.data.auctions });
                setWonAuctionsCount(wonAuctionsResponse.data.count); 
            }
        };
        fetchUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <Navbar/>
        <div className="body-class">

        <div className="profile-info">
                    <div className="user-details">
                        <h2>Name: {user.name}</h2>
                        <p>Username: {user.username}</p>
                        <p>Won Auctions: {wonAuctionsCount}</p> 
                    </div>
                </div>
            <div className="profile-container">
                <div className="profile-actions">
                    <button onClick={() => navigate('/createAuction')}>Create Auction</button>
                    <button onClick={() => navigate('/changePassword')}>Update Password</button>
                </div>
                <h3>My Auctions</h3>
                <div className="auction-list">
                    {user.auctions.map((auction, index) => (
                        <div key={index} className="auction-card">
                            <h4>{auction.Title}</h4>
                            <p>{auction.Description}</p>
                            <p>Starting Price: ${auction.StartingPrice}</p>
                            <p>Current Price: ${auction.CurrentPrice}</p>
                            <p>Start Time: {new Date(auction.StartingTime).toLocaleString()}</p>
                            <p>End Time: {new Date(auction.EndingTime).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
};

export default Profile;