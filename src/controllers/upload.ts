import e, { Request, Response } from "express";
import { handleMultipleUpload, handleUpload } from "../modules/uploading";
import { isStrictJpg } from "../utils/file-checker";
import { SeniorCitizenModel } from "../models/senior-citizen";
import * as fs from "fs";
import { parse } from "fast-csv";

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

export const handleImportCSV = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const filePath = req.file.path;
    const records: any[] = [];

    fs.createReadStream(filePath)
      .pipe(parse({
        headers: true,
        encoding: "utf-8",
        trim: true,
        ignoreEmpty: true,
        objectMode: true,
      }))
      .on("data", (data) => {
        records.push(data);
      })
      .on("end", async () => {
        let result = await SeniorCitizenModel.insertBulkSeniorCitizenInfo(records)
        res.status(200).json({
          message: "CSV file imported successfully",
          importedRecords: result.length,
          result
        });

        fs.unlinkSync(filePath); // Delete the file after processing
      });

  } catch (error) {
    res.status(500).json({
      message: "An error occurred while importing the CSV file",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const handleMultipleFileUpload = async (req: Request, res: Response) => {
  try {
    const { files, type } = req.body;

    console.log(files, type);

    res.send(200);
    return;

    if (!files || Object.keys(files).length === 0) {
      res.status(400).json({ message: "No files uploaded" });
      return;
    }

    const fileUploadPromises: Promise<string>[] = [];
    const filesArray = Array.isArray(files) ? files : Object.values(files).flat();

    for (const file of filesArray) {
      const uploadPromise = handleMultipleUpload({
        file,
        type,
      });
      fileUploadPromises.push(uploadPromise);
    }

    const filePaths = await Promise.all(fileUploadPromises);
    res.status(200).json({
      message: "Files uploaded successfully",
      filePaths,
    });
  }

  catch (error) {
    res.status(500).json({
      message: "An error occurred while uploading files",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};