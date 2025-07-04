import { Router } from "express";
import { multerConfig } from "../middlewares/mutler.middleware";

import {
    handleSeniorCitizenPhotoUpload,
    handleSeniorCitizenSignatureUpload,
} from "../controllers/upload.controller";

const router: Router = Router();

router.post("/profile-picture", multerConfig.single("image"), handleSeniorCitizenPhotoUpload);
router.post(
    "/electronic-signature",
    multerConfig.single("signature"),
    handleSeniorCitizenSignatureUpload
);

export default router;
