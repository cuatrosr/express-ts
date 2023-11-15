import express from "express";
import authController from "@/controllers/auth.controller.ts";

const router = express.Router();

router.post("/login", authController.login);

export default router;
