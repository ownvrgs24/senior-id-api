import { Request, Response } from "express";
import UserAccountModel from "../models/user-accounts";

const model = new UserAccountModel();

export const register = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await model.createUserAccount(data);
        res.status(201).json({
            message: "User account registered successfully!",
            data: result,
        });
    } catch (error) {
        console.error("Error registering account:", error);
        res.status(500).json({
            message: "An error occurred while registering account!",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};
