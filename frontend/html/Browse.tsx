import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/browse.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

interface Auction {
    _id: string;
    Title: string;
    Description: string;
    StartingPrice: number;
    StartingTime: Date;
    EndingTime: Date;
    CreatedBy?: string;
    CurrentPrice: number;
}

const Browse: React.FC = () => {
    const [auctions, setAuctions] = useState<Auction[]>([]);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState<string>('');
    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await axios.get('http://localhost:8000/auction/getAuctions');
                setAuctions(response.data);
            } catch (error) {
                console.error('Error fetching auctions:', error);
            }
        };
        fetchAuctions();
    }, []);
    

    const handleClick = (auctionId: string) => {
        navigate(`/browse/${auctionId}`);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/auction/search?query=${searchQuery}`);
            setAuctions(response.data.auctions);
        } catch (error) {
            console.error('Error searching auctions:', error);
        }
    };

    return (
        <>
            <Navbar/>
            <div className="browse-search">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>
           
            <div className="browse-container">
           
                <div className="browse-auction-list">
                    {auctions.map((auction, index) => (
                        <div key={index} className="browse-auction-card" onClick={() => handleClick(auction._id)}>
                            <div className="browse-auction-details">
                                <h2 className="browse-auction-title">{auction.Title}</h2>
                                <p className="browse-description">{auction.Description}</p>
                                <p>Current Price: Rs. {auction.CurrentPrice}</p>
                                <p>Start Time: {new Date(auction.StartingTime).toLocaleString()}</p>
                                <p>End Time: {new Date(auction.EndingTime).toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Browse;