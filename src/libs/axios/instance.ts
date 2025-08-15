import environment from "@/config/environtment"
import { SessionExtended } from "@/types/Auth"
import axios, { InternalAxiosRequestConfig } from "axios"
import { getSession } from "next-auth/react"

//interface to extend the Session type with an optional accessToken


// This file creates an Axios instance configured for API requests, including authentication headers.
const headers = {
  "Content-Type": "application/json",
}

// This instance is configured to handle API requests with a base URL and custom headers.
const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
})
console.log("cek",environment.API_URL)
// This interceptor adds the access token to the request headers if available in the session.
instance.interceptors.request.use(
  async (request: InternalAxiosRequestConfig) => {
    const session = (await getSession()) as SessionExtended | null
    if (session?.accessToken) {
      request.headers.Authorization = `Bearer ${session.accessToken}`
    }
    return request
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default instance
