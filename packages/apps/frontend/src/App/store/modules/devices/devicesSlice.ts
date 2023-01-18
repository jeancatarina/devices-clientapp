import { Device, Devices } from '@devices/types'
import { lodash } from '@devices/utils'

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
  filteredDevices: Devices
  currentDevice: Device | null
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState = {
  devices: [],
  filteredDevices: [],
  currentDevice: null,
  status: 'idle',
  error: null
} as DeviceState

const devices = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    sortBy: (state, action: Record<any, any>) => {
      state.filteredDevices = lodash.sortBy(
        state.filteredDevices,
        action.payload
      )

      state.devices = lodash.sortBy(state.devices, action.payload)
    },
    filterByType: (state, action: Record<any, any>) => {
      state.filteredDevices = action.payload
    },
    cleanFilter: (state) => {
      state.filteredDevices = state.devices
    },
    setCurrentDevice: (state, action) => {
      state.currentDevice = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // GET ALL
      .addCase(getDevicesAsync.fulfilled, (state, action: Record<any, any>) => {
        state.status = 'idle'
        state.devices = action.payload
        state.filteredDevices = action.payload
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
        state.filteredDevices = [...state.filteredDevices, action.payload]
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
        state.devices = state.devices.map((device) =>
          device.id === action.meta.arg.id ? action.meta.arg : device
        )
        state.filteredDevices = state.filteredDevices.map((device) =>
          device.id === action.meta.arg.id ? action.meta.arg : device
        )
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

          state.filteredDevices = state.filteredDevices.filter(
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

export const { sortBy, filterByType, cleanFilter, setCurrentDevice } =
  devices.actions

export const devicesSlice = devices.reducer
