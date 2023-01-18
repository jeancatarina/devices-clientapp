import { Container } from '@devices/ui'

import { setCurrentDevice } from 'App/store/modules/devices/devicesSlice'
import { getDevicesAsync } from 'App/store/modules/devices/devicesThunk'
import { useEffect, useState } from 'react'

import { useAppThunkDispatch } from '../../store/index'
import { Filter } from './components/Filter'
import { List } from './components/List'
import { Modal } from './components/Modal'

export const Dashboard = () => {
  const dispatch = useAppThunkDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    dispatch(getDevicesAsync())
  }, [dispatch])

  const handleAdd = () => {
    setIsModalOpen(true)
  }

  const onCloseModal = () => {
    dispatch(setCurrentDevice(null))
    setIsModalOpen(false)
  }

  return (
    <Container maxW={'90ch'}>
      <Filter
        handleAdd={handleAdd}
        showList={showList}
        setShowList={setShowList}
      />
      <List
        showList={showList}
        setShowList={setShowList}
        setIsModalOpen={setIsModalOpen}
      />
      <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
    </Container>
  )
}
