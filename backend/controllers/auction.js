import { Auction } from "../models/auction.js";
import mongoose from 'mongoose';
import { getIoInstance } from '../io.js';



export const createAuction = async (req, res) => {
  try {
    const { Title, Description, StartingPrice, StartingTime, EndingTime, CreatedBy } = req.body;
    console.log(Title, Description, StartingPrice, StartingTime, EndingTime, CreatedBy)
    if (!Title || !Description || !StartingPrice || !StartingTime || !EndingTime) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const auction = await Auction.create({ 
      Title, 
      Description, 
      StartingPrice: Number(StartingPrice), 
      StartingTime: new Date(StartingTime), 
      EndingTime: new Date(EndingTime), 
      CreatedBy 
    });

    return res.status(201).json({ auction });
  } catch (error) {
    console.error('Error creating auction:', error);
    return res.status(500).json({ error: error.message });
  }
};

export const getAuctions = async (req, res) => {
  try {
    const currentDateTime = new Date(); 
    const currentDateTimeUTC = new Date(currentDateTime.getUTCFullYear(), currentDateTime.getUTCMonth(), currentDateTime.getUTCDate(), currentDateTime.getUTCHours(), currentDateTime.getUTCMinutes(), currentDateTime.getUTCSeconds()); 

    console.log('Current Time:', currentDateTimeUTC.toISOString()); 

    const auctions = await Auction.find({
      StartingTime: { $lte: currentDateTimeUTC },
      EndingTime: { $gte: currentDateTimeUTC }
    });

    auctions.forEach(auction => {
      console.log('Auction Starting Time:', new Date(auction.StartingTime).toISOString());
      console.log('Auction Ending Time:', new Date(auction.EndingTime).toISOString());
    });

    return res.status(200).send(JSON.stringify(auctions));
  } catch (error) {
    console.error('Error getting auctions:', error);
    return res.status(500).json({ error: error.message });
  }
};


export const getRequestedAuction = async (req, res) => {
  const { auctionId } = req.params; 

  try {
    const _id = new mongoose.Types.ObjectId(auctionId);
    const auction = await Auction.findById(_id);

    if (!auction) {
      console.log("No auction found with ID: ", auctionId);
      return res.status(404).json({ message: 'Auction not found' });
    }

    return res.status(200).json({ auction });
  } catch (error) {
    console.error("Error when trying to find auction: ", error);
    return res.status(500).json({ message: 'Server error' });
  }
};



export const updateBid = async (req, res) => {
  const { auctionId, bidAmount, bidderName } = req.body;
  console.log("Auction ID: ", auctionId, "Bid Amount: ", bidAmount, "Bidder Name: ", bidderName);

  try {
    const _id = new mongoose.Types.ObjectId(auctionId);
    const auction = await Auction.findById(_id);

    if (!auction) {
      console.log("No auction found with ID: ", auctionId);
      return res.status(404).json({ message: 'Auction not found' });
    }

    if (auction.CurrentPrice >= bidAmount) {
      console.log("Bid amount must be greater than the current price");
      return res.status(400).json({ message: 'Bid amount must be greater than the current price' });
    }
    auction.CurrentPrice = bidAmount;
    auction.highestBidder = bidderName;
    await auction.save();

    const io = getIoInstance();

    io.to(auctionId).emit('auction update', auction);

    return res.status(200).json({ auction });
  } catch (error) {
    console.error("Error when trying to place bid: ", error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const searchAuctions = async (req, res) => {
  const { query } = req.query;

  try {
    const currentDateTime = new Date(); 
    const currentDateTimeUTC = new Date(currentDateTime.getUTCFullYear(), currentDateTime.getUTCMonth(), currentDateTime.getUTCDate(), currentDateTime.getUTCHours(), currentDateTime.getUTCMinutes(), currentDateTime.getUTCSeconds()); 

    const auctions = await Auction.find({
      $and: [
        {
          $or: [
            { Title: new RegExp(query, 'i') },
            { Description: new RegExp(query, 'i') },
          ],
        },
        {
          StartingTime: { $lte: currentDateTimeUTC },
          EndingTime: { $gte: currentDateTimeUTC }
        }
      ]
    });

    return res.status(200).json({ auctions });
  } catch (error) {
    console.error('Error searching auctions:', error);
    return res.status(500).json({ error: error.message });
  }
};;

export const getWonAuctions = async (req, res) => {
  const { username } = req.params;

  try {
    const now = new Date();
    const utcNow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));

    const count = await Auction.countDocuments({
      highestBidder: username,
      EndingTime: { $lt: utcNow }
    });

    return res.status(200).json({ count });
  } catch (error) {
    console.error('Error getting won auctions:', error);
    return res.status(500).json({ error: error.message });
  }
};