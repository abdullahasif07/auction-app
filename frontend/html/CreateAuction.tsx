import React, { useState } from 'react';
import '../css/createauction.css';
import Navbar from './Navbar';
import axios from 'axios';


const CreateAuction: React.FC = () => {
    const  username  = localStorage.getItem('username')

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startingPrice: '',
        startingTime: '',
        endingTime: '',
    });

    const handleChange = (e) => {
        if (e.target.name === 'startingTime' || e.target.name === 'endingTime') {
            const date = new Date(e.target.value);
            setFormData({
                ...formData,
                [e.target.name]: date.toISOString().substring(0, 16)
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        const AuctionData = {
            Title: formData.title,
            Description: formData.description,
            StartingPrice: formData.startingPrice,
            StartingTime: new Date(formData.startingTime),
            EndingTime: new Date(formData.endingTime),
            CreatedBy: username,
        };

        console.log('Data being sent to server:', AuctionData);

        try {
            const response = await axios.post('http://localhost:8000/auction/create', AuctionData);
            console.log(response.data);
            alert('Auction created successfully!');
        } catch (error) {
            console.error('Error creating Auction:', error.response.data);
            alert('Error creating Auction!');
        };
    }

    return (
        <>
            <Navbar />
            <div className="create_auction_container">
                <h1 className="create_auction_h1">Create Auction</h1>
                <form className="create_auction_form" onSubmit={handleSubmit}>
                    <label className="create_auction_label" htmlFor="itemImage">Item Image:</label>
                    <input className="create_auction_input" type="file" id="itemImage" name="itemImage" accept="image/*" required />
                    <label className="create_auction_label" htmlFor="title">Title:</label>
                    <input className="create_auction_input" type="text" id="title" name="title" required onChange={handleChange} />
                    <label className="create_auction_label" htmlFor="description">Description:</label>
                    <textarea className="create_auction_textarea" id="description" name="description" rows={4} required onChange={handleChange}></textarea>
                    <label className="create_auction_label" htmlFor="startingPrice">Starting Price:</label>
                    <input className="create_auction_input" type="number" id="startingPrice" name="startingPrice" min="0" step="1" required onChange={handleChange} />
                    <label className="create_auction_label" htmlFor="startingTime">Start Time:</label>
                    <input className="create_auction_input" type="datetime-local" id="startingTime" name="startingTime" required onChange={handleChange} />
                    <label className="create_auction_label" htmlFor="endingTime">End Time:</label>
                    <input className="create_auction_input" type="datetime-local" id="endingTime" name="endingTime" required onChange={handleChange} />
                    <button className="create_auction_button" type="submit">Create Auction</button>
                </form>
            </div>
        </>
    );

};


export default CreateAuction;