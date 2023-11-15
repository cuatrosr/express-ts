import { Request, Response } from "express";
import { UserDocument } from "@/models/user.model.ts";
import userService from "@/services/user.service.ts";
import bcrypt from "bcrypt";

class AuthController {
  public async login(req: Request, res: Response) {
    try {
      const user: UserDocument | null = await userService.findByEmail(
        req.body.email
      );
      await this.validateUser(req, res, user);

      const token = await userService.generateToken(user!);

      return res.status(200).send({ email: user!.email, token });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  private async validateUser(
    req: Request,
    res: Response,
    user: UserDocument | null
  ) {
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({ message: "Not authorized" });
    }
  }
}

export default new AuthController();
