import account from "../models/user-accounts";
import UserAccountModel from "../models/user-accounts";
import { Request, Response } from "express";
import { comparePassword, generateToken } from "../utils/auth-related";

const userAccountModel = new UserAccountModel();

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const userAccount = await userAccountModel.getUserAccountByUsername(username);

        if (!userAccount) {
            res.status(401).json({ message: "No matching username in the system." });
            return;
        }

        const isPasswordValid = await comparePassword(password, userAccount.password);

        if (!isPasswordValid) {
            res.status(401).json({ message: "The password you entered is invalid." });
            return;
        }

        const token = await generateToken(userAccount);

        const data = {
            id: userAccount.record_id,
            username: userAccount.username,
            full_name: [
                userAccount.first_name,
                userAccount.middle_name ? userAccount.middle_name.charAt(0) + "." : null,
                userAccount.last_name,
            ]
                .filter(Boolean)
                .join(" "),
            role: userAccount.role,
            created_at: userAccount.created_at,
            token,
        };

        res.status(200).json({
            message: "Login successful",
            data,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};
