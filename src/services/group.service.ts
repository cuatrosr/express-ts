import { groupSchema } from "./../schemas/group.schema";
import GroupModel, { GroupInput, GroupDocument } from "../models/group.model";
import userService from "./user.service";
import jwt from "jsonwebtoken";

class GroupService {
  public async create(groupInput: GroupInput): Promise<GroupDocument> {
    try {
      const group = await GroupModel.create(groupInput);
      return group;
    } catch (error) {
      throw error;
    }
  }

  public async update(
    id: string,
    groupInput: GroupInput
  ): Promise<GroupDocument | null> {
    try {
      const groupUpdated = await GroupModel.updateOne({ _id: id }, groupInput);
      if (groupUpdated) {
        const group = await GroupModel.findById(id);
        return group;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: string): Promise<GroupDocument | null> {
    try {
      const group = await GroupModel.findByIdAndDelete(id);
      return group;
    } catch (error) {
      throw error;
    }
  }
  public async findAll(): Promise<GroupDocument[]> {
    try {
      const groups = await GroupModel.find();
      return groups;
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<GroupDocument | null> {
    try {
      const group = await GroupModel.findById(id);
      return group;
    } catch (error) {
      throw error;
    }
  }

  public async addUserToAGroup(
    idUser: string,
    idGroup: string
  ): Promise<GroupDocument> {
    const group = await this.findById(idGroup);
    const user = await userService.findById(idUser);
    if (!group || !user) {
      throw new Error("Group or User not found");
    }
    if (group.users.includes(idUser)) {
      throw new Error("User in group");
    }
    group?.users.push(idUser);
    user?.groups?.push(idGroup);
    await this.update(idGroup, group);
    await userService.update(idUser, user);
    return group;
  }

  public async deleteUserToAGroup(
    idUser: string,
    idGroup: string
  ): Promise<GroupDocument> {
    const group = await this.findById(idGroup);
    const user = await userService.findById(idUser);
    if (!group || !user) {
      throw new Error("Group or User not found");
    }
    if (group.users.includes(idUser)) {
      throw new Error("User not in group");
    }
    group.users = group.users.filter((user) => user !== idUser);
    user.groups = user.groups?.filter((group) => group !== idGroup);
    await this.update(idGroup, group);
    await userService.update(idUser, user);
    return group;
  }
  public async getGroupsByUser(idUser: string): Promise<GroupDocument[]> {
    try {
      const user = await userService.findById(idUser);
      const groups = await GroupModel.find({ users: user?._id });
      return groups;
    } catch (error) {
      throw error;
    }
  }
  public async findByName(name: string): Promise<GroupDocument | null> {
    try{
        const group = await GroupModel.findOne({name: name});
        return group;
    }catch(error){
        throw error;
    }
}
}
export default new GroupService();
