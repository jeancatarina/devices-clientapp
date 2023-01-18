import { Device } from '@devices/types'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text
} from '@devices/ui'
import { FramerMotion, IconList } from '@devices/ui'

import { RootState, useAppThunkDispatch } from 'App/store'
import { setCurrentDevice } from 'App/store/modules/devices/devicesSlice'
import { deleteDeviceAsync } from 'App/store/modules/devices/devicesThunk'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import { IList } from './IList'

export const List: FC<IList> = ({ showList, setIsModalOpen }) => {
  const dispatch = useAppThunkDispatch()
  const devices = useSelector((state: RootState) => state.devices)

  const handleDelete = (id: string) => {
    dispatch(deleteDeviceAsync(id))
  }

  const openDrawer = (device: Device) => {
    dispatch(setCurrentDevice(device))
    setIsModalOpen(true)
  }

  const getLoading = () => {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    )
  }

  const getCardBody = (device: Device) => {
    return (
      <>
        <CardBody>
          <Heading size="md">{device.system_name}</Heading>
          <Text>{device.type}</Text>
          <div>{device.hdd_capacity} GB</div>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              onClick={() => openDrawer(device)}
              leftIcon={<IconList.EditIcon />}
            >
              Update
            </Button>
            <Button
              leftIcon={<IconList.DeleteIcon />}
              onClick={() => handleDelete(device.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </>
    )
  }

  const getEmptyState = () => {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <Text size="md">No devices found, please add one.</Text>
      </Box>
    )
  }

  const getDevicesList = () => {
    const cards = devices.filteredDevices.map((device: Device) => {
      return (
        <FramerMotion.motion.div
          key={device.id}
          layout
          initial={{ transform: 'scale(0)' }}
          animate={{ transform: 'scale(1)' }}
          exit={{ transform: 'scale(0)' }}
        >
          <Card key={device.id}>
            {devices.status === 'loading' ? getLoading() : getCardBody(device)}
          </Card>
        </FramerMotion.motion.div>
      )
    })

    if (cards.length === 0 && devices.status === 'idle') {
      return getEmptyState()
    }

    return (
      <SimpleGrid
        spacing={showList ? '4px' : '40px'}
        columns={showList ? 1 : undefined}
        minChildWidth={showList ? undefined : '250px'}
      >
        {cards}
      </SimpleGrid>
    )
  }

  return (
    <FramerMotion.AnimatePresence>
      {getDevicesList()}
    </FramerMotion.AnimatePresence>
  )
}
