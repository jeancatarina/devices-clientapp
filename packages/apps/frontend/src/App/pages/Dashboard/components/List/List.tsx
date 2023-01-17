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

import { RootState, useAppThunkDispatch } from 'App/store'
import { deleteDeviceAsync } from 'App/store/modules/devices/devicesThunk'
import { FC } from 'react'
import { useSelector } from 'react-redux'

export const List: FC = () => {
  const dispatch = useAppThunkDispatch()
  const devices = useSelector((state: RootState) => state.devices)

  const handleDelete = (id: string) => {
    dispatch(deleteDeviceAsync(id))
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
            <Button>Update</Button>
            <Button onClick={() => handleDelete(device.id)}>Delete</Button>
          </ButtonGroup>
        </CardFooter>
      </>
    )
  }

  const getDevicesList = () => {
    const cards = devices.devices.map((device: Device) => {
      return (
        <Card key={device.id}>
          {devices.status === 'loading' ? getLoading() : getCardBody(device)}
        </Card>
      )
    })

    return (
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 4fr))"
      >
        {cards}
      </SimpleGrid>
    )
  }

  return getDevicesList()
}
