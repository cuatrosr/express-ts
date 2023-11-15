import express from "express";
import userController from "@/controllers/user.controller.ts";
import validateSchema from "@/middleware/validateSchema.ts";
import { userSchema } from "@/schemas/user.schema.ts";
import passport from "passport";

const router = express.Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  validateSchema(userSchema),
  userController.create
);

router.get(
  "/findAll",
  passport.authenticate("jwt", { session: false }),
  userController.findAll
);

router.get(
  "/find/:id",
  passport.authenticate("jwt", { session: false }),
  userController.findById
);

router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  userController.update
);

router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  userController.delete
);

export default router;