import { Router } from "express";

import {
    register,
    addEmergencyContact,
    getAllSeniorCitizenInfo,
    getSeniorCitizenById,
} from "../controllers/senior-citizen.controller";

const router = Router();

router.post("/register", register);
router.post("/add-emergency-contact", addEmergencyContact);
router.get("/all", getAllSeniorCitizenInfo);
router.get("/:id", getSeniorCitizenById);

export default router;
