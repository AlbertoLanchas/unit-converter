import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json("pong");
});

router.get("/ping", (req, res) => {
  res.json("ping");
});

export default router;
