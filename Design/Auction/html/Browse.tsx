import React from 'react';
import '../css/browse.css';

const Browse: React.FC = () => {
    return (
        <div className="container">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>

            {/* Ideally, the auction cards would be generated from data using map() */}
            <div className="auction-card">
                <img src="../assets/auction.png" alt="Item Image" className="item-image" />
                <div className="auction-details">
                    <h2 className="auction-title">Auction Title</h2>
                    <p className="description">Description of the item goes here.</p>
                    <p>Starting Price: Rs. 5,000</p>
                    <p>Start Time: 10:00 AM</p>
                    <p>End Time: 12:00 PM</p>
                </div>
            </div>

            <div className="auction-card">
                <img src="../assets/auction.png" alt="Item Image" className="item-image" />
                <div className="auction-details">
                    <h2 className="auction-title">Another Auction Title</h2>
                    <p className="description">Description of another item goes here.</p>
                    <p>Starting Price: Rs. 10,000</p>
                    <p>Start Time: 11:00 AM</p>
                    <p>End Time: 1:00 PM</p>
                </div>
            </div>
        </div>
    );
};

export default Browse;
