import { axios } from '../index'

export const axiosCall = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: Number(process.env.REACT_APP_REQUEST_TIMEOUT)
})
