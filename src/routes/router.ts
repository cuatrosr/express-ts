import express from "express";
import userRouter from "./users";
import authRouter from "./auth";
import groupRouter from "./groups";
const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/groups", groupRouter);

export default router;
