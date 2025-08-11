
// This file defines the TypeScript interface for the registration form data structure.
interface IRegister {
    fullName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type { IRegister };