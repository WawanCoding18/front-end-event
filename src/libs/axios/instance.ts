import environment from "@/config/environtment"
import axios, { InternalAxiosRequestConfig } from "axios"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"

interface CustomSession extends Session {
  accessToken?: string
}

const headers = {
  "Content-Type": "application/json",
}

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
})

instance.interceptors.request.use(
  async (request: InternalAxiosRequestConfig) => {
    const session = (await getSession()) as CustomSession | null
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
