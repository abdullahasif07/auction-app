import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';
import '../css/specificauction.css';
import UserContext from './UserContext';
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

const SpecificAuction: React.FC = () => {
    const { auctionId } = useParams<{ auctionId: string }>();
    const [auction, setAuction] = useState<Auction | null>(null);
    const { setUsername } = useContext(UserContext);
    const username = localStorage.getItem('username');

    useEffect(() => {
        setUsername(username); 
        const fetchAuction = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/auction/getAuction/${auctionId}`);
                setAuction(response.data.auction);
            } catch (error) {
                console.error('Error fetching auction:', error);
            }
        };

        fetchAuction();

        const socket = io('http://localhost:8000');

        socket.emit('join', auctionId);

        socket.on('auction update', (updatedAuction: Auction) => {
            setAuction(updatedAuction);
        });

        // Clean up the effect
        return () => socket.disconnect();
    }, [auctionId, setUsername, username]);



    if (!auction) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bidAmount = e.target.elements.bidAmount.value;

        if (username === auction.CreatedBy) {
            alert('You cannot bid on your own auction');
            return;
        }
        if (bidAmount <= auction.CurrentPrice || bidAmount <= auction.StartingPrice) {
            alert('Bid amount should be greater than the starting and current price');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8000/auction/placeBid/${auctionId}`, {
                auctionId,
                bidAmount,
                bidderName: username
            });
            console.log(response.data);
            alert('Bid placed successfully!');
        } catch (error) {
            console.error('Error placing bid:', error);
        }
    }
    return (
        <>
            <Navbar />
            <div className="auction-details">
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Specific Auction</title>

                <div className="auction-info">
                    <h2 className="auction-title">{auction.Title}</h2>
                    <p className="description">{auction.Description}</p>
                    <p><strong>Starting Price:</strong> Rs. {auction.StartingPrice}</p>
                    <p><strong>Current Price:</strong> Rs. {auction.CurrentPrice}</p>
                    <p><strong>Start Time:</strong>{' '}{new Date(auction.StartingTime).toLocaleString()}</p>
                    <p><strong>End Time:</strong>{' '}{new Date(auction.EndingTime).toLocaleString()}</p>
                    <form className="bid-form" onSubmit={handleSubmit}>
                        <label htmlFor="bidAmount">Your Bid:</label>
                        <input type="number" id="bidAmount" name="bidAmount" min="0" step="1" required />
                        <button type="submit" >Place Bid</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SpecificAuction;