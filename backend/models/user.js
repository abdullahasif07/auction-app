import mongoose from "mongoose";
const Schema = mongoose.Schema; // Define Schema from mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  auctions: [{ type: Schema.Types.ObjectId, ref: 'Auction' }], 
  numItemsOwned: { 
    type: Number,
    default: 0
  }
});

export const User = mongoose.model("User", userSchema);
