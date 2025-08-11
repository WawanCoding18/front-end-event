import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IRegister } from "@/types/Auth";

// This service handles authentication-related API calls, specifically user registration.
const authService = {
    register: (payload: IRegister ) => instance.post(`${endpoint.AUTH}/register`, payload),
}

export default authService;