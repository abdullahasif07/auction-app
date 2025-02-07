import React from 'react';
import '../css/createauction.css';
import Navbar from './Navbar'
const CreateAuction: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Create Auction</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="itemImage">Item Image:</label>
                    <input type="file" id="itemImage" name="itemImage" accept="image/*" required />
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" rows={4} required></textarea>
                    <label htmlFor="startingPrice">Starting Price:</label>
                    <input type="number" id="startingPrice" name="startingPrice" min="0" step="1" required />
                    <label htmlFor="startTime">Start Time:</label>
                    <input type="datetime-local" id="startTime" name="startTime" required />
                    <label htmlFor="endTime">End Time:</label>
                    <input type="datetime-local" id="endTime" name="endTime" required />
                    <button type="submit">Create Auction</button>
                </form>
            </div>
        </>
    );
};

export default CreateAuction;
