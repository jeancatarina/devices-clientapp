import '@testing-library/jest-dom/extend-expect'
import { act, render, screen } from '@testing-library/react'
import * as userEvent from '@testing-library/user-event'
import * as DevicesThunk from 'App/store/modules/devices/devicesThunk'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { List } from '../List'

const mockStore = configureMockStore()
const devices = [
  {
    id: '1',
    system_name: 'Device 1',
    type: 'laptop',
    hdd_capacity: 250
  }
]

describe('List component', () => {
  it('should render devices list correctly', () => {
    const store = mockStore({
      devices: {
        status: 'idle',
        filteredDevices: devices
      }
    })
    const setIsModalOpen = jest.fn()

    render(
      <Provider store={store}>
        <List showList={true} setIsModalOpen={setIsModalOpen} />
      </Provider>
    )

    expect(screen.getByText('Device 1')).toBeInTheDocument()
  })

  it('should call setIsModalOpen when update button is clicked', () => {
    const store = mockStore({
      devices: {
        status: 'idle',
        filteredDevices: devices
      }
    })
    const setIsModalOpen = jest.fn()

    render(
      <Provider store={store}>
        <List showList={true} setIsModalOpen={setIsModalOpen} />
      </Provider>
    )

    act(() => {
      userEvent.default.click(screen.getByText('Update'))
    })

    expect(setIsModalOpen).toHaveBeenCalled()
  })

  it('should dispatch deleteDeviceAsync when delete button is clicked', () => {
    const store = mockStore({
      devices: {
        status: 'idle',
        filteredDevices: devices
      }
    })
    const setIsModalOpen = jest.fn()

    jest
      .spyOn(DevicesThunk, 'deleteDeviceAsync')
      .mockImplementation(() => ({
        type: 'devices/deleteDeviceAsync'
      }))
      .mockReturnValueOnce({
        type: 'devices/deleteDeviceAsync',
        payload: { id: '1' }
      })

    render(
      <Provider store={store}>
        <List showList={true} setIsModalOpen={setIsModalOpen} />
      </Provider>
    )

    act(() => {
      userEvent.default.click(screen.getByText('Delete'))
    })

    expect(store.getActions()).toEqual([
      { type: 'devices/deleteDeviceAsync', payload: { id: '1' } }
    ])
  })
})
