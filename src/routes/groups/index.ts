import express from "express";
import groupController from "../../controllers/group.controller";
import validateSchema from "../../middleware/validateSchema";
import { groupSchema } from "../../schemas/group.schema";
import passport from "passport";
import { checkUserRole } from "../../middleware/auth";

const router = express.Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  checkUserRole(["superadmin"]),
  validateSchema(groupSchema),
  groupController.create
);

router.get(
  "/findAll",
  passport.authenticate("jwt", { session: false }),
  checkUserRole(["superadmin", "user"]),
  groupController.findAll
);

router.get(
  "/find/:id",
  passport.authenticate("jwt", { session: false }),
  checkUserRole(["superadmin", "user"]),
  groupController.findById
);

router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  checkUserRole(["superadmin"]),
  groupController.update
);

router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  checkUserRole(["superadmin"]),
  groupController.delete
);

router.patch(
  "/addUser/:idGroup/user/:idUser",
  passport.authenticate("jwt", { session: false }),
  checkUserRole(["superadmin"]),
  groupController.addUserToAGroup
);

router.put(
  "/remove/:idGroup/user/:idUser",
  passport.authenticate("jwt", { session: false }),
  checkUserRole(["superadmin"]),
  groupController.deleteUserToAGroup
);

router.get(
  "/findGroup/:userId",
  passport.authenticate("jwt", { session: false }),
  checkUserRole(["superadmin", "user"]),
  groupController.getGroupsByUser
);

export default router;
