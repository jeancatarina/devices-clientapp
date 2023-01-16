import { Action, Store, ThunkDispatch, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { devicesSlice } from './modules/devices/devicesSlice'

export const store: Store = configureStore({
  reducer: {
    devices: devicesSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>()
