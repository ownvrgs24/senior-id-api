import { Router } from "express";

import {
    register,
    getAllSeniorCitizenInfo,
    getSeniorCitizenById,
    updateSeniorCitizen,
} from "../controllers/senior-citizen";
import { deleteFileFromServer } from "../controllers/upload";

const router = Router();

router.get("/all/:current_page/:page_size", getAllSeniorCitizenInfo);
router.get("/:id", getSeniorCitizenById);
router.post("/register", register);
router.put("/:id", updateSeniorCitizen);
router.post("/delete/:path", deleteFileFromServer);

export default router;
