import express from "express";
import userRouter from "@routes/users/index.ts";
import authRouter from "@routes/auth/index.ts";

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
