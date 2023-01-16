import { axiosCall } from '../../services/axiosCall'

export const deleteDevice = (id: string) => axiosCall.delete(`/devices/${id}`)
