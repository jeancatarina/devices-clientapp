import { axiosCall } from '../../services/axiosCall'

export const getDevices = () => axiosCall.get('/devices')
