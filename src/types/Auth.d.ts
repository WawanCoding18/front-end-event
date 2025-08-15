import {Session, User} from "next-auth";
import {JWT} from "next-auth/jwt";


// This file defines the TypeScript interface for the registration form, activation code, user, session and jwt for setup auth login
//  data structure.
interface IRegister {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IActivevateCode {
  code: string;
}

interface UserExtended extends User {
  accessToken?: string;
  role?: string;
}
interface SessionExtended extends Session {
  accessToken?: string;
}
interface JWTExtended extends JWT {
  user?: UserExtended;
}

interface ILogin{
    identifier: string;
    password: string;
}

export type {
  IRegister,
  IActivevateCode,
  JWTExtended,
  SessionExtended,
  UserExtended,
  ILogin
};
