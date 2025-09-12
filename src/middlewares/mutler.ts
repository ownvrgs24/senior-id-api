import multer from "multer";
import { csvFileStorage, validateCsvFile } from "../modules/uploading";
// Middleware for handling file uploads using multer
// This middleware is configured to store files in memory and has a file size limit of 25 MB.
// It allows for uploading an image and a signature, each with a maximum count of 1
// The uploaded files can be accessed in the request object under `req.files`

export const multerConfig = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB
});

// CSV upload specific configuration
export const csvUploadConfig = multer({
    storage: csvFileStorage,
    fileFilter: validateCsvFile
});

export const bulkUploadConfig = multer({
    storage: multer.memoryStorage(),
});