import mongoose from "mongoose";

export interface GroupInput {
    name: string;
    users: String[]; 
}

export interface GroupDocument extends GroupInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    deleteAt?: Date;
}

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true, collection: "groups" });

const Group = mongoose.model<GroupDocument>("Group", groupSchema);

export default Group;
