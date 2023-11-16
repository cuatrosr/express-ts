import { Request, Response } from "express";
import { UserDocument } from "../models/user.model";
import userService from "../services/user.service";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.util";

class AuthController {
  public async login(req: Request, res: Response) {
    try {
      const user: UserDocument | null = await userService.findByEmail(
        req.body.email
      );

      if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(401).json({ message: "Not authorized" });
      }

      const payload = { email: user.email };
      const token = await generateToken(payload, user.id);

      return res.status(200).send({ email: user.email, token });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AuthController();
