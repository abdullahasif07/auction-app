import React from 'react';
import { Link } from 'react-router-dom';
import '../css/specificauction.css';

const SpecificAuction: React.FC = () => {
    return (

        <div className="auction-details">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Specific Auction</title>
            <div className="auction-image">
                <img src="" alt="Item Image" />
            </div>
            <div className="auction-info">
                <h2 className="auction-title">Auction Title</h2>
                <p className="description">Description of the item goes here.</p>
                <p><strong>Starting Price:</strong> Rs. 10,000</p>
                <p><strong>Current Price:</strong> Rs. 12,000</p>
                <p><strong>Start Time:</strong> 10:00 AM</p>
                <p><strong>End Time:</strong> 12:00 PM</p>
                <div className="bid-form">
                    <label htmlFor="bidAmount">Your Bid:</label>
                    <input type="number" id="bidAmount" name="bidAmount" min="0" step="1" required />
                    <button type="submit">Place Bid</button>
                </div>
            </div>
        </div>
    );
};

export default SpecificAuction;