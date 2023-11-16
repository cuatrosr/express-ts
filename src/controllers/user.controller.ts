import { Request, Response } from "express";
import userService from "../services/user.service";
import { UserInput, UserDocument } from "../models/user.model";
import bcrypt from "bcrypt";

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const userExists: UserDocument | null = await userService.findByEmail(
        req.body.email
      );
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user: UserDocument = await userService.create(
        req.body as UserInput
      );

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const users: UserDocument[] = await userService.findAll();
      if (!users?.length) {
        return res.status(404).json({ message: "Users not found" });
    }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async findById(req: Request, res: Response) {
    try {
      const user: UserDocument | null = await userService.findById(
        req.params.id
      );
      if (user === null) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const user: UserDocument | null = await userService.findById(
        req.params.id
      );
      if (user === null) {
        return res.status(404).json({ message: "User not found" });
      }
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      const updateUser: UserDocument | null = await userService.update(
        user.id,
        req.body
      );

      return res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const user: UserDocument | null = await userService.delete(req.params.id);
      if (user === null) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async  getUsersByGroup(req: Request, res: Response): Promise<Response>{
    try{
      const users: UserDocument[] = await userService.getUserByGroup(req.params.groupId);
      if (!users?.length) {
          return res.status(404).json({ message: "Users not found" });
      }
        return res.status(200).json(users);
    }catch(error){
        return res.status(500).json({error: error});
    }
  }

  public async findByEmail(req: Request, res: Response) {
    try {
      const user: UserDocument | null = await userService.findByEmail(
        req.params.email
      );
      if (user === null) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();
