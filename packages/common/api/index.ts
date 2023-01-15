import axios, { AxiosResponse, AxiosError } from 'axios'

const { isAxiosError } = axios

export type ApiResponse = AxiosResponse
export type ApiResponseError = AxiosError

export { axios, isAxiosError }
