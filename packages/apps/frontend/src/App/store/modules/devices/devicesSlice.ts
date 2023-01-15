import { createSlice } from '@reduxjs/toolkit'

import { getDevicesAsync } from './devicesThunk'

interface DeviceState {
  devices: any[]
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
  }
})

export const devicesSlice = devices.reducer
