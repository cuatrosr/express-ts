import express from "express";
import userController from "../../controllers/user.controller";
import validateSchema from "../../middleware/validateSchema";
import { userSchema } from "../../schemas/user.schema";
import passport from "passport";
import { checkUserRole } from "../../middleware/auth";

const router = express.Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  checkUserRole("superadmin"),
  validateSchema(userSchema),
  userController.create
);

router.get(
  "/findAll",
  passport.authenticate("jwt", { session: false }),
  checkUserRole("user"),
  userController.findAll
);

router.get(
  "/find/:id",
  passport.authenticate("jwt", { session: false }),
  checkUserRole("user"),
  userController.findById
);

router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  checkUserRole("superadmin"),
  userController.update
);

router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  checkUserRole("superadmin"),
  userController.delete
);
router.get(
"/findEmail/:email",
passport.authenticate("jwt", { session: false }),
  userController.findByEmail
);

router.get(
  "/findUsersByGroup/:id",
  passport.authenticate("jwt", { session: false }),
    userController.getUsersByGroup
);

export default router;
