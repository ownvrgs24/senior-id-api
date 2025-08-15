import { Router } from "express";
import { multerConfig } from "../middlewares/mutler";

import {
  handleSeniorCitizenPhotoUpload,
  handleSeniorCitizenSignatureUpload,
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

export default router;
