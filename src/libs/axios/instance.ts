import environment from "@/config/environtment";
import axios from "axios";
import {Session} from "next-auth"
import {getSession} from "next-auth/react"

//For extends customsession to session for ensure accessToken value
interface CustomSession extends Session {
    accessToken?: string
}

//header content type
const headers = {
    "Content-Type": "application/json",
}

//Make axios enviroment
const instance = axios.create({
    baseURL: environment.API_URL,
    headers,
    timeout: 60*1000
})

//If when success request and fail request 
instance.interceptors.request.use(
    async(request)=>{
        const Session: CustomSession | null = await getSession()
        if(Session && Session.accessToken){
            request.headers.Authorization = `Bearer ${Session.accessToken}`
        }
        return request
    },
    (error) => Promise.reject(error)
)

//If when success response and fail response 
instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
)

export default instance;