import { Router } from "express";
import SeniorCitizenRoutes from "./senior-citizen.route";
import UploadRoutes from "./upload.route";

const router = Router();
// Register the senior citizen routes
router.use("/senior-citizen", SeniorCitizenRoutes);
// Register the upload routes
router.use("/upload", UploadRoutes);

export default router;
