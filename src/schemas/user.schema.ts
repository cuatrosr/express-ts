import {array, object, string,  TypeOf} from 'zod';

export  const userSchema = object ({
    name: string({required_error: "Name is required"}),
    email: string({required_error: "Email is required"})
            .email("Not a valid email address"),
    password: string({required_error: "Password is required"})
                .min(8, "Password  must be at least 8 characteres long"),
    groups: array(string())
});