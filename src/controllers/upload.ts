import { Request, Response } from "express";
import { handleUpload } from "../modules/uploading";
import { isStrictJpg } from "../utils/file-checker";

export const handleSeniorCitizenPhotoUpload = async (
  req: Request,
  res: Response
) => {
  try {
    const { senior_citizen_id } = req.body;

    if (!req.file || !senior_citizen_id) {
      res.status(400).json({ message: "No file uploaded" });
    }

    if (!(await isStrictJpg(req.file as Express.Multer.File))) {
      res.status(415).json({
        message: "Only .jpg JPEG images are accepted.",
      });
    }

    const filePath = await handleUpload({
      senior_citizen_id: senior_citizen_id,
      file: req.file as Express.Multer.File,
      type: "photo",
    });

    res.status(200).json({
      message: "Profile picture uploaded successfully",
      filePath,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while uploading the profile picture",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const handleSeniorCitizenSignatureUpload = async (
  req: Request,
  res: Response
) => {
  try {
    const { senior_citizen_id } = req.body;

    if (!req.file || !senior_citizen_id) {
      res.status(400).json({ message: "No file uploaded" });
    }

    if (!(await isStrictJpg(req.file as Express.Multer.File))) {
      res.status(415).json({
        message: "Only .jpg JPEG images are accepted.",
      });
    }

    const filePath = await handleUpload({
      senior_citizen_id: senior_citizen_id,
      file: req.file as Express.Multer.File,
      type: "signature",
    });

    res.status(200).json({
      message: "Electronic signature uploaded successfully",
      filePath,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while uploading the electronic signature",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const handleSeniorCitizenThumbprintUpload = async (
  req: Request,
  res: Response
) => {
  try {
    const { senior_citizen_id } = req.body;

    if (!req.file || !senior_citizen_id) {
      res.status(400).json({ message: "No file uploaded" });
    }

    if (!(await isStrictJpg(req.file as Express.Multer.File))) {
      res.status(415).json({
        message: "Only .jpg JPEG images are accepted.",
      });
    }

    const filePath = await handleUpload({
      senior_citizen_id: senior_citizen_id,
      file: req.file as Express.Multer.File,
      type: "thumbprint",
    });

    res.status(200).json({
      message: "Electronic signature uploaded successfully",
      filePath,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while uploading the electronic signature",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
