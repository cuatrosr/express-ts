import { Express } from "express";
import userController from "../controllers/user.controller";
import auth from  '../middleware/auth';
import validateSchema from '../middleware/validateSchema'
import { userSchema } from "../schemas/user.schema";

const routes = (app: Express) => {
  app.post("/users", auth, validateSchema(userSchema), userController.create);
  app.get("/users", auth, userController.findAll);
  app.get("/users/:id", userController.findById);
  app.put("/users/:id", userController.update);
  app.delete("/users/:id", userController.delete);
  app.post("/login", userController.login);

};

export default routes;