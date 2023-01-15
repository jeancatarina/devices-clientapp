import { createAsyncThunk } from '@reduxjs/toolkit'
import { Devices } from '@devices/types'
import { getDevices } from '@devices/api/modules/devices/getDevices'

const fnGetDevices = async (): Promise<Devices | unknown> => {
  try {
    const response = await getDevices()

    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getDevicesName = 'devices/getDevices'
export const getDevicesAsync = createAsyncThunk(getDevicesName, fnGetDevices)
