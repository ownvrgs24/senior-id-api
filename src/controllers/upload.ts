import e, { Request, Response } from "express";
import { handleMultipleUpload, handleUpload } from "../modules/uploading";
import { isStrictJpg } from "../utils/file-checker";
import { SeniorCitizenModel } from "../models/senior-citizen";
import * as fs from "fs";
import { parse } from "fast-csv";

const convertToManilaTimezone = (dateString: string): Date => {
  if (!dateString) return new Date();

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.warn(`Invalid date format: ${dateString}`);
    return new Date();
  }

  // Add 16 hours to set the time to 4 PM (16:00) in Manila timezone context
  return new Date(date.getTime() + 16 * 60 * 60 * 1000);
};

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

export const deleteFileFromServer = async (req: Request, res: Response) => {
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

export const handleImportCSV = async (req: Request, res: Response) => {
  try {
    // Validate if file is CSV based on mimetype
    if (!req.file || req.file.mimetype !== "text/csv") {
      res.status(415).json({
        message: "Only CSV files are accepted.",
      });
      return;
    }

    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const filePath = req.file.path;
    const records: any[] = [];

    fs.createReadStream(filePath)
      .pipe(
        parse({
          headers: true,
          encoding: "utf-8",
          trim: true,
          ignoreEmpty: true,
          objectMode: true,
        })
      )
      .on("error", (error) => {
        console.error("CSV parsing error:", error);
        try {
          fs.unlinkSync(filePath); // Clean up file on error
        } catch (unlinkError) {
          console.error("Failed to delete uploaded file:", unlinkError);
        }
        res.status(400).json({
          message: "Invalid CSV file format",
          error: error.message,
        });
      })
      .on("data", (data) => {
        records.push(data);
      })
      .on("end", async () => {
        try {
          // Convert date fields to Manila timezone before insertion
          const processedRecords = records.map((record) => ({
            ...record,
            date_of_birth: new Date(record.date_of_birth),
            date_of_issuance: new Date(record.date_of_issuance),
          }));

          let result = await SeniorCitizenModel.insertBulkSeniorCitizenInfo(
            processedRecords
          );
          res.status(200).json({
            message: "CSV file imported successfully",
            importedRecords: result.length,
            result,
          });
        } catch (dbError) {
          console.error("Database insertion error:", dbError);
          res.status(500).json({
            message: "Failed to save data to database",
            error: dbError instanceof Error ? dbError.message : String(dbError),
          });
        } finally {
          try {
            fs.unlinkSync(filePath); // Delete the file after processing
          } catch (unlinkError) {
            console.error("Failed to delete uploaded file:", unlinkError);
          }
        }
      });
  } catch (error) {
    console.error("CSV import error:", error);
    res.status(500).json({
      message: "An error occurred while importing the CSV file",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const handleMultipleFileUpload = async (req: Request, res: Response) => {
  try {
    const { files } = req;
    const { type } = req.body;

    if (!files || (files as Express.Multer.File[]).length === 0) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const uploadedFilePaths = await handleMultipleUpload({
      files: files as Express.Multer.File[],
      type: type || "others",
    });

    res.status(200).json({
      message: "Files uploaded successfully",
      filePaths: uploadedFilePaths,
      count: uploadedFilePaths.length,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while uploading files",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
