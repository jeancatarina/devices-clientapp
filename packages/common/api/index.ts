import axios, { AxiosError, AxiosResponse } from 'axios'

const { isAxiosError } = axios

export type ApiResponse = AxiosResponse
export type ApiResponseError = AxiosError

export { axios, isAxiosError }
