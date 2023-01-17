import { Container } from '@devices/ui'

import { getDevicesAsync } from 'App/store/modules/devices/devicesThunk'
import { useEffect, useState } from 'react'

import { useAppThunkDispatch } from '../../store/index'
import { Filter } from './components/Filter'
import { List } from './components/List'
import { Modal } from './components/Modal'

export const Dashboard = () => {
  const dispatch = useAppThunkDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    dispatch(getDevicesAsync())
  }, [dispatch])

  const handleAdd = () => {
    setIsModalOpen(true)
  }

  const onCloseModal = () => setIsModalOpen(false)

  return (
    <Container>
      <Filter handleAdd={handleAdd} />
      <List />
      <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
    </Container>
  )
}
