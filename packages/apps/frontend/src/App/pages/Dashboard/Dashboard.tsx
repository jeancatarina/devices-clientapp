import { Device } from '@devices/types'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text
} from '@devices/ui'

import {
  deleteDeviceAsync,
  getDevicesAsync
} from 'App/store/modules/devices/devicesThunk'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState, useAppThunkDispatch } from '../../store/index'
import { Filter } from './components/Filter'
import { Modal } from './components/Modal'

export const Dashboard = () => {
  const dispatch = useAppThunkDispatch()
  const devices = useSelector((state: RootState) => state.devices)
  const [isModalOpen, setIsModalOpen] = useState(false)

  console.log(devices)

  useEffect(() => {
    dispatch(getDevicesAsync())
  }, [dispatch])

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

  const handleAdd = () => {
    setIsModalOpen(true)
  }

  const getAddCard = () => {
    return (
      <Card>
        <CardBody>
          <Heading size="md">Add a new device</Heading>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button onClick={handleAdd}>Add</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
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
    if (devices.devices.length === 0) {
      return getAddCard()
    }

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
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {cards}
      </SimpleGrid>
    )
  }

  const onCloseModal = () => setIsModalOpen(false)

  const getAddModal = () => {
    return <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
  }

  const getFilter = () => {
    return <Filter />
  }

  return (
    <Container>
      {getFilter()}
      {getDevicesList()}
      {getAddModal()}
    </Container>
  )
}
