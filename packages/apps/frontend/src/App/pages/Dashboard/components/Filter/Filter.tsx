import { Button, ButtonGroup, ReactSelect } from '@devices/ui'

import { RootState, useAppThunkDispatch } from 'App/store'
import { filterByType, sortBy } from 'App/store/modules/devices/devicesSlice'
import { useSelector } from 'react-redux'

import { getDevicesAsync } from '../../../../store/modules/devices/devicesThunk'
import {
  AddButtonContainerStyled,
  ContainerStyled,
  FilterContainerStyled
} from './Filter.styles'
import { iFilter } from './iFilter'

export const Filter: React.FC<iFilter> = ({ handleAdd }) => {
  const dispatch = useAppThunkDispatch()
  const devices = useSelector((state: RootState) => state.devices)

  const getAddButton = () => {
    return (
      <ButtonGroup spacing="2">
        <Button onClick={handleAdd}>Add Device</Button>
      </ButtonGroup>
    )
  }

  const handleOnChangeType = async (value) => {
    const filtered = value
      .map((type) =>
        devices.devices.filter((device) => device.type === type.value)
      )
      .pop()

    await dispatch(filterByType(filtered))

    // if (devices.devices.length === 0) {
    //   dispatch(getDevicesAsync())
    // }
  }

  const getTypeFilter = () => {
    return (
      <ReactSelect.default
        isClearable
        isMulti
        placeholder="Select Device Type"
        onChange={handleOnChangeType}
        options={[
          { value: 'Windows Workstation', label: 'Windows Workstation' },
          { value: 'Windows Server', label: 'Windows Server' },
          { value: 'Mac', label: 'Mac' }
        ]}
      ></ReactSelect.default>
    )
  }

  const handleOnChangeSortBy = (value) => {
    dispatch(sortBy([value.value] as any))
  }

  const getSortByFilter = () => {
    return (
      <ReactSelect.default
        placeholder="Sort By"
        onChange={handleOnChangeSortBy}
        options={[
          { value: 'system_name', label: 'System Name' },
          { value: 'hdd_capacity', label: 'HDD Capacity' }
        ]}
      ></ReactSelect.default>
    )
  }

  return (
    <ContainerStyled>
      <FilterContainerStyled>
        {getTypeFilter()}
        {getSortByFilter()}
      </FilterContainerStyled>
      <AddButtonContainerStyled>{getAddButton()}</AddButtonContainerStyled>
    </ContainerStyled>
  )
}
