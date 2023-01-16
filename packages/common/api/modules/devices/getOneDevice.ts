import { axiosCall } from '../../services/axiosCall'

export const getOneDevice = (id: string) => axiosCall.get(`/devices/${id}`)
