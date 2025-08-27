import { Router } from "express";
import { multerConfig } from "../middlewares/mutler";

import {
  deleteFileFromServer,
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



export default router;
