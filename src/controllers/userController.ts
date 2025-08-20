import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userService } from "../services/users/userService.js";
const userServices = new userService();
export const userController = {
    registerUser: async (req: Request, res: Response) => {
        try {
            const userData = req.body;
            const newUser = await userServices.registerUser(userData);
            res.status(StatusCodes.CREATED).json(newUser);
        } catch (error) {
            console.error("Error occurred while registering user:", error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Failed to register user" });
        }
    },
    loginUser: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user = await userServices.loginUser(email, password);
            if (user) {
                res.status(StatusCodes.OK).json(user);
            } else {
                res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid credentials" });
            }
        } catch (error) {
            console.error("Error occurred while logging in user:", error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Failed to log in user" });
        }
    }
}