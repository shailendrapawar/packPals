import express from "express";
import AuthController from "../controllers/authController";
const authRouter=express.Router();

authRouter.post("/getOtp",AuthController.getOtp);

export default authRouter;