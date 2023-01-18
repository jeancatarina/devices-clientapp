import { deleteDevice } from '@devices/api/modules/devices/deleteDevice'
import { getDevices } from '@devices/api/modules/devices/getDevices'
import { getOneDevice } from '@devices/api/modules/devices/getOneDevice'
import { postDevice } from '@devices/api/modules/devices/postDevice'
import { putDevice } from '@devices/api/modules/devices/putDevice'
import { Device, Devices } from '@devices/types'
import { convertStringToNumbers } from '@devices/utils'

import { createAsyncThunk } from '@reduxjs/toolkit'

const nameGetDevices = 'devices/getDevices'
const nameGetOneDevice = 'devices/getOneDevice'
const namePostDevice = 'devices/postDevice'
const namePutDevice = 'devices/putDevice'
const nameDeleteDevice = 'devices/deleteDevice'

const fnGetDevices = async (): Promise<Devices | unknown> => {
  try {
    const response = await getDevices()

    return convertStringToNumbers(response.data)
  } catch (error) {
    console.error(error)
  }
}

const fnGetOneDevice = async (id: string): Promise<Device | unknown> => {
  try {
    const response = await getOneDevice(id)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

const fnPostDevice = async (
  payload: Omit<Device, 'id'>
): Promise<Device | unknown> => {
  try {
    const response = await postDevice(payload)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

const fnPutDevice = async (payload: Device): Promise<Device | unknown> => {
  try {
    const response = await putDevice(payload)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

const fnDeleteDevice = async (id: string): Promise<Device | unknown> => {
  try {
    const response = await deleteDevice(id)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getDevicesAsync = createAsyncThunk(nameGetDevices, fnGetDevices)
export const getOneDeviceAsync = createAsyncThunk(
  nameGetOneDevice,
  fnGetOneDevice
)
export const postDeviceAsync = createAsyncThunk(namePostDevice, fnPostDevice)
export const putDeviceAsync = createAsyncThunk(namePutDevice, fnPutDevice)
export const deleteDeviceAsync = createAsyncThunk(
  nameDeleteDevice,
  fnDeleteDevice
)
