import { Request, Response } from "express";
import { handleUpload } from "../modules/uploading.module";

export const handleSeniorCitizenPhotoUpload = async (req: Request, res: Response) => {
    try {
        const { senior_citizen_id } = req.body;

        if (
            !req.file ||
            senior_citizen_id === undefined ||
            senior_citizen_id === null ||
            senior_citizen_id === ""
        ) {
            res.status(400).json({ message: "No file uploaded" });
        }

        const filePath = await handleUpload({
            senior_citizen_id: senior_citizen_id,
            file: req.file as Express.Multer.File,
            type: "photo", // Specify the type as 'photo' for profile picture uploads
        });

        res.status(200).json({
            message: "Profile picture uploaded successfully",
            filePath: filePath,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while uploading the profile picture",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};

export const handleSeniorCitizenSignatureUpload = async (req: Request, res: Response) => {
    try {
        const { senior_citizen_id } = req.body;

        if (
            !req.file ||
            senior_citizen_id === undefined ||
            senior_citizen_id === null ||
            senior_citizen_id === ""
        ) {
            res.status(400).json({ message: "No file uploaded" });
        }

        const filePath = await handleUpload({
            senior_citizen_id: senior_citizen_id,
            file: req.file as Express.Multer.File,
            type: "signature", // Specify the type as 'signature' for electronic signature uploads
        });

        res.status(200).json({
            message: "Electronic signature uploaded successfully",
            filePath: filePath,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while uploading the electronic signature",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};
