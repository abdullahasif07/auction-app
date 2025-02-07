import express from "express";
import { createAuction, getAuctions, getRequestedAuction, updateBid, searchAuctions, getWonAuctions } from "../controllers/auction.js";

export const auctionRouter = express.Router();

auctionRouter.post("/create", createAuction);
auctionRouter.get("/getAuctions", getAuctions);
auctionRouter.get("/getAuction/:auctionId", getRequestedAuction);
auctionRouter.post("/placeBid/:auctionId", updateBid);
auctionRouter.get("/search", searchAuctions);
auctionRouter.get("/getWonAuctions/:username", getWonAuctions);