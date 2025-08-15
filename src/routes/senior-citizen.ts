import { Router } from "express";

import {
    register,
    getAllSeniorCitizenInfo,
    getSeniorCitizenById,
} from "../controllers/senior-citizen";

const router = Router();

router.post("/register", register);
router.get("/all/:current_page/:page_size", getAllSeniorCitizenInfo);
router.get("/:id", getSeniorCitizenById);

export default router;
