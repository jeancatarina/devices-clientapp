import { Devices } from '@devices/types'

import { createSlice } from '@reduxjs/toolkit'

import {
  deleteDeviceAsync,
  getDevicesAsync,
  getOneDeviceAsync,
  postDeviceAsync,
  putDeviceAsync
} from './devicesThunk'

interface DeviceState {
  devices: Devices
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState = {
  devices: [],
  status: 'idle',
  error: null
} as DeviceState

const devices = createSlice({
  name: 'devices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL
      .addCase(getDevicesAsync.fulfilled, (state, action: Record<any, any>) => {
        state.status = 'idle'
        state.devices = action.payload
      })
      .addCase(getDevicesAsync.rejected, (state, action: Record<any, any>) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(getDevicesAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      // GET ONE
      .addCase(
        getOneDeviceAsync.fulfilled,
        (state, action: Record<any, any>) => {
          state.status = 'idle'
          state.devices = action.payload
        }
      )
      .addCase(
        getOneDeviceAsync.rejected,
        (state, action: Record<any, any>) => {
          state.status = 'failed'
          state.error = action.error
        }
      )
      .addCase(getOneDeviceAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })

      // POST
      .addCase(postDeviceAsync.fulfilled, (state, action: Record<any, any>) => {
        state.status = 'idle'
        state.devices = [...state.devices, action.payload]
      })
      .addCase(postDeviceAsync.rejected, (state, action: Record<any, any>) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(postDeviceAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      // PUT
      .addCase(putDeviceAsync.fulfilled, (state, action: Record<any, any>) => {
        state.status = 'idle'
        state.devices = action.payload
      })
      .addCase(putDeviceAsync.rejected, (state, action: Record<any, any>) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(putDeviceAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      // DELETE
      .addCase(
        deleteDeviceAsync.fulfilled,
        (state, action: Record<any, any>) => {
          state.devices = state.devices.filter(
            (device) => device.id !== action.meta.arg
          )
          state.status = 'idle'
        }
      )
      .addCase(
        deleteDeviceAsync.rejected,
        (state, action: Record<any, any>) => {
          state.status = 'failed'
          state.error = action.error
        }
      )
      .addCase(deleteDeviceAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
  }
})

export const devicesSlice = devices.reducer
