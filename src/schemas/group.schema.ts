import { object, string, array, Schema } from 'zod';
import { userSchema, UserSchema } from './user.schema';

export const groupSchema: Schema<{ name: string, users: UserSchema[] }> = object({
    name: string({ required_error: "Name is required" }),
    users: array(userSchema)
});