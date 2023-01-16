import { Device } from '@devices/types'

import { axiosCall } from '../../services/axiosCall'

export const postDevice = (payload: Omit<Device, 'id'>) =>
  axiosCall.post('/devices', payload)
