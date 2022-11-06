import { Router } from "express";
import {
  getSaved,
  getSaveds,
  createSaved,
  updateSaved,
  deleteSaved,
} from "../controllers/saveds.controllers.js";

const router = Router();

router.get("/api/saved", getSaveds);

router.get("/api/saved/:id", getSaved);

router.post("/api/saved", createSaved);

router.put("/api/saved/:id", updateSaved);

router.delete("/api/saved/:id", deleteSaved);

export default router;
