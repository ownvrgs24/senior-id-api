import { Router } from "express";
import { bulkUploadConfig, csvUploadConfig, multerConfig } from "../middlewares/mutler";

import {
  handleImportCSV,
  handleMultipleFileUpload,
  handleSeniorCitizenPhotoUpload,
  handleSeniorCitizenSignatureUpload,
  handleSeniorCitizenThumbprintUpload,
} from "../controllers/upload";


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


router.post(
  "/import-csv",
  csvUploadConfig.single("file"),
  handleImportCSV
);

router.post("/import-images",
  bulkUploadConfig.array("files"),
  handleMultipleFileUpload
);

export default router;
