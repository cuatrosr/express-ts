import { object, string, array, Schema } from 'zod';

export const groupSchema= object ({
    name: string({ required_error: "Name is required" }),
    users: array(string())
});