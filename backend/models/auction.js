import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    StartingPrice: {
        type: Number,
        required: true,
    },
    StartingTime: {
        type: Date,
        required: true,
    },
    EndingTime: {
        type: Date,
        required: true,
    },
    CreatedBy: {
        type: String,
        // required: true,
    },
    CurrentPrice: {
        type: Number,
        default: 0, 
    },
    highestBidder : {
        type: String,
        default: "",
    },
    }
);


export const Auction = mongoose.model("Auction", auctionSchema);