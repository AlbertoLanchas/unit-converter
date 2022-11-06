import { Router } from "express";

const router = Router();

router.get("/saved");

router.get("/saved/:id");

router.post("/saved");

router.put("/saved/:id");

router.delete("/saved/:id");

export default router;
