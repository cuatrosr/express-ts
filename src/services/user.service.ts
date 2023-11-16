import UserModel, { UserInput, UserDocument } from "../models/user.model";
import jwt from "jsonwebtoken";
import groupService from "./group.service";
class UserService {
  public async create(userInput: UserInput): Promise<UserDocument> {
    try {
      const user = await UserModel.create(userInput);
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async findByEmail(email: string): Promise<UserDocument | null> {
    try {
      const userExists = await UserModel.findOne({ email });
      return userExists;
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<UserDocument | null> {
    try {
      const user = await UserModel.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async findAll(): Promise<UserDocument[]> {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      throw error;
    }
  }

  public async update(
    id: string,
    userInput: UserInput
  ): Promise<UserDocument | null> {
    try {
      const userUpdated = await UserModel.updateOne({ _id: id }, userInput);
      if (userUpdated) {
        const user = await UserModel.findById(id);
        return user;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: String): Promise<UserDocument | null> {
    try {
      return await UserModel.findOneAndDelete({ _id: id });
    } catch (error) {
      throw error;
    }
  }
  
  public async getUserByGroup(idGroup: string): Promise<UserDocument[]> {
    try {
      const group = await groupService.findById(idGroup);
      const users = await UserModel.find({ groups: group?._id });
      return users;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
