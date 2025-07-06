import { Router } from "express";

import {
    register,
    getAllSeniorCitizenInfo,
    getSeniorCitizenById,
} from "../controllers/senior-citizen.controller";

const router = Router();

router.post("/register", register);
router.get("/all", getAllSeniorCitizenInfo);
router.get("/:id", getSeniorCitizenById);

export default router;
