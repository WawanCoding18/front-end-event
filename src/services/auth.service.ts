import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IRegister, IActivevateCode, ILogin } from "@/types/Auth";

// This service handles authentication-related API calls, specifically user registration, activation account, and login.
const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),

  activation: (payload: IActivevateCode) => 
    instance.post(`${endpoint.AUTH}/activation`, payload),

  login: (payload: ILogin) => 
    instance.post(`${endpoint.AUTH}/login`, payload),

  getProfileWithToken: (token:string) => {
    return instance.get(`${endpoint.AUTH}/me`,{
      headers:{
         Authorization: `Bearer ${token}`
      }
    })
  }
};

export default authServices;

  // console.log("DEBUG TOKEN:", token); // lihat token
  // console.log("DEBUG AUTH HEADER:", `Bearer ${token}`);