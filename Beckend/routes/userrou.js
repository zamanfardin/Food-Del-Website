import express from "express"
import { LoginUser,RegisterUser } from "../controllers/usercon.js"

const UserRouter= express.Router();

UserRouter.post("/register",RegisterUser);
UserRouter.post("/login",LoginUser);
export default UserRouter;
