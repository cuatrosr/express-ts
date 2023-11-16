import express from "express";
import groupController from "../../controllers/group.controller";
import validateSchema from "../../middleware/validateSchema";
import { groupSchema } from "../../schemas/group.schema";
import passport from "passport";

const router = express.Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  validateSchema(groupSchema),
  groupController.create
);

router.get(
  "/findAll",
  passport.authenticate("jwt", { session: false }),
  groupController.findAll
);

router.get(
  "/find/:id",
  passport.authenticate("jwt", { session: false }),
  groupController.findById
);

router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  groupController.update
);

router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  groupController.delete
);

export default router;
