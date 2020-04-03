import * as yup from "yup";
export declare const emailNotLongEnough = "email must be at least 3 characters";
export declare const passwordNotLongEnough = "password must be at least 3 characters";
export declare const invalidEmail = "email must be a valid email";
export declare const registerPasswordValidation: yup.StringSchema;
export declare const validUserSchema: yup.ObjectSchema<yup.Shape<{}, {
    email: string;
    password: string;
}>>;
export declare const loginSchema: yup.ObjectSchema<yup.Shape<{}, {
    email: string;
    password: string;
}>>;
export declare const changePasswordSchema: yup.ObjectSchema<yup.Shape<{}, {
    newPassword: string;
}>>;
