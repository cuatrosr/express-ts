import express from "express";
import userController from "@/controllers/user.controller.ts";

const router = express.Router();

router.post("/login", userController.login);

export default router;
