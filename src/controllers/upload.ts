import { Request, Response } from "express";
import { handleUpload } from "../modules/uploading";
import { isStrictJpg } from "../utils/file-checker";
import fs from "fs";
import { parse } from "fast-csv";
import { SeniorCitizenModel } from "../models/senior-citizen";

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

export const deleteFileFromServer = async (
  req: Request,
  res: Response
) => {
  try {
    const { filePath } = req.body;

    if (!filePath) {
      res.status(400).json({ message: "File path is required" });
    }

    res.status(200).json({
      message: "File deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the file",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};


export const handleImportCSV = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const filePath = req.file.path;

    const csvData: any[] = [];

    fs.createReadStream(filePath)
      .pipe(parse({ headers: true }))
      .on("data", (row) => {
        csvData.push(row);
      })
      .on("end", async () => {
        // Optionally delete the file after processing
        fs.unlinkSync(filePath);
        // Process csvData as needed (e.g., insert into database)
        const result = await SeniorCitizenModel.insertBulkSeniorCitizenInfo(csvData);
        if (!result) {
          res.status(500).json({ message: "Failed to import CSV data" });
          return;
        }
        res.status(200).json({ message: "CSV file imported successfully", data: csvData });
      })
      .on("error", (error) => {
        res.status(500).json({
          message: "An error occurred while processing the CSV file",
          error: error instanceof Error ? error.message : String(error),
        });
      });

  } catch (error) {
    res.status(500).json({
      message: "An error occurred while processing the CSV file",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}