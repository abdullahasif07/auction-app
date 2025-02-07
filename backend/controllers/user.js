import { User } from "../models/user.js";
import { Auction } from "../models/auction.js"; 


export const createUser = async (req, res) => {
  try {
    const {name, username, password } = req.body;

    if (!name || !username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    const olduser = await User.findOne({username});
    if (olduser){
      return res.status(409).json({ error: "Username already exists. Please enter a new username" });
    }

    const user = await User.create({name, username, password });

    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


export const loginUser = async (req, res) => {
  try {
      const { username, password } = req.body;
      if (!username || !password) {
          return res.status(400).json({ error: "Username or password not provided" });
      }

      const user = await User.findOne({ username, password });
      if (!user) {
          return res.status(400).json({ message: 'Invalid username or password' });
      }

      res.json({ message: 'User logged in successfully', user: user });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}



export const changePass = async (req, res) => {
  try {
      const { password, username } = req.body;
      console.log("request body", req.body); 

      if (!username || !password) {
          return res.status(400).json({ error: "new password not provided" });
      }

      const user = await User.findOne({ username });
      if (!user) {
          return res.status(400).json({ message: 'Invalid username' });
      }
      user.password = password;
      await user.save(); 

      res.json({ message: 'Password changed successfully', user: user });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}



export const getUser = async (req, res) => {
  try {
      const { username } = req.params;
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(400).json({ message: 'Invalid username' });
      }
      res.json({ user });
  } catch (error) {
      console.log("cant find user")
      return res.status(500).json({ error: error.message });
  }
};


export const getUserAuctions = async (req, res) => {
  try {
      const { username } = req.params;
      const auctions = await Auction.find({ CreatedBy: username });
      if (!auctions) {
          return res.status(400).json({ message: 'No auctions found for this user' });
      }
      res.json({ auctions });
  } catch (error) {
    console.log("cant find user auctions")
      return res.status(500).json({ error: error.message });
  }
};