import { Router } from "express";
import SeniorCitizenRoutes from "./senior-citizen";
import UploadRoutes from "./upload";
import UserAccountsRoutes from "./user-accounts";
import AuthRoutes from "./auth";

const router = Router();
// Register the senior citizen routes
router.use("/senior-citizen", SeniorCitizenRoutes);
router.use("/accounts", UserAccountsRoutes);
router.use("/auth", AuthRoutes);

// Register the upload routes
router.use("/upload", UploadRoutes);

export default router;
