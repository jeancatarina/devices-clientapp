import { Button, ButtonGroup, IconList, ReactSelect, Stack } from '@devices/ui'

import { RootState, useAppThunkDispatch } from 'App/store'
import {
  cleanFilter,
  filterByType,
  sortBy
} from 'App/store/modules/devices/devicesSlice'
import { useSelector } from 'react-redux'

import {
  AddButtonContainerStyled,
  ContainerStyled,
  FilterContainerStyled
} from './Filter.styles'
import { IFilter } from './IFilter'

export const Filter: React.FC<IFilter> = ({
  handleAdd,
  setShowList,
  showList
}) => {
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
    const filtered = devices.devices.filter((device) =>
      value.some(
        (item) => item.value.toLowerCase() === device.type.toLowerCase()
      )
    )

    if (value.length > 0) {
      dispatch(filterByType(filtered))
    } else {
      dispatch(cleanFilter())
    }
  }

  const getTypeFilter = () => {
    return (
      <ReactSelect.default
        isClearable
        isMulti
        placeholder="Select Device Type"
        onChange={handleOnChangeType}
        options={[
          { value: 'WINDOWS_WORKSTATION', label: 'Windows Workstation' },
          { value: 'WINDOWS_SERVER', label: 'Windows Server' },
          { value: 'MAC', label: 'Mac' }
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

  const getDynamicLayoutButtons = () => {
    return (
      <Stack direction="row" spacing={4}>
        <Button
          leftIcon={<IconList.DragHandleIcon />}
          colorScheme="teal"
          variant={showList ? 'outline' : 'solid'}
          onClick={() => setShowList(false)}
        >
          Cards
        </Button>
        <Button
          leftIcon={<IconList.HamburgerIcon />}
          colorScheme="teal"
          variant={showList ? 'solid' : 'outline'}
          onClick={() => setShowList(true)}
        >
          List
        </Button>
      </Stack>
    )
  }

  return (
    <ContainerStyled>
      <FilterContainerStyled>
        {getTypeFilter()}
        {getSortByFilter()}
      </FilterContainerStyled>
      <AddButtonContainerStyled>
        {getDynamicLayoutButtons()}
        {getAddButton()}
      </AddButtonContainerStyled>
    </ContainerStyled>
  )
}
