import { Device } from '@devices/types'

import { axiosCall } from '../../services/axiosCall'

export const postDevices = (payload: Device) =>
  axiosCall.post('/devices', payload)
