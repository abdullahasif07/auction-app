
import express from "express";
import { createUser, loginUser, changePass, getUser, getUserAuctions } from "../controllers/user.js";

export const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.post("/loginUser", loginUser);
userRouter.post("/changePass", changePass);
userRouter.get("/getUser/:username", getUser);
userRouter.get("/getUserAuctions/:username", getUserAuctions); 