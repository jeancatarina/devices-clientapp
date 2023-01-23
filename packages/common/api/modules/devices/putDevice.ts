import { Device } from '@devices/types'

import { axiosCall } from '../../services/axiosCall'

export const putDevice = (payload: Device) =>
  axiosCall.put(`/devices/${payload.id}`, payload)
