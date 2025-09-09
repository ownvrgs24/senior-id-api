import { Router } from "express";
import { multerConfig } from "../middlewares/mutler";

import {
  handleImportCSV,
  handleSeniorCitizenPhotoUpload,
  handleSeniorCitizenSignatureUpload,
  handleSeniorCitizenThumbprintUpload,
} from "../controllers/upload";
import { csvFileStorage, validateCsvFile } from "../modules/uploading";
import multer from "multer";

const router: Router = Router();


router.post(
  "/profile-picture",
  multerConfig.single("image"),
  handleSeniorCitizenPhotoUpload
);
router.post(
  "/electronic-signature",
  multerConfig.single("image"),
  handleSeniorCitizenSignatureUpload
);

router.post(
  "/thumbprint",
  multerConfig.single("image"),
  handleSeniorCitizenThumbprintUpload
);

// CSV upload specific configuration
const csvUploadConfig = multer({
  storage: csvFileStorage,
  fileFilter: validateCsvFile
});

router.post(
  "/import-csv",
  csvUploadConfig.single("file"),
  handleImportCSV
);


export default router;
