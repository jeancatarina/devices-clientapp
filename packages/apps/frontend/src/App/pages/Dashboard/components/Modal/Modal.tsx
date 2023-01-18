import {
  Button,
  Modal as ChakraModal,
  Field,
  Form,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Formik,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select
} from '@devices/ui'

import { RootState, useAppThunkDispatch } from 'App/store'
import {
  postDeviceAsync,
  putDeviceAsync
} from 'App/store/modules/devices/devicesThunk'
import { useSelector } from 'react-redux'

import { IModal } from './IModal'

export const Modal: React.FC<IModal> = ({ isModalOpen, onCloseModal }) => {
  const dispatch = useAppThunkDispatch()
  const devices = useSelector((state: RootState) => state.devices)

  const handleSave = (val) => {
    if (devices.currentDevice) {
      dispatch(
        putDeviceAsync({
          id: devices.currentDevice.id,
          system_name: val.systemName,
          type: val.type,
          hdd_capacity: val.hddCapacity
        })
      )
    } else {
      dispatch(
        postDeviceAsync({
          system_name: val.systemName,
          type: val.type,
          hdd_capacity: val.hddCapacity
        })
      )
    }
    onCloseModal()
  }

  const getSystemNameInput = () => (
    <Field name="systemName">
      {({ field, form }) => (
        <FormControl isRequired>
          <FormLabel mb="8px">System Name</FormLabel>
          <Input {...field} size="sm" />
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )

  const getTypeInput = () => (
    <Field name="type">
      {({ field, form }) => (
        <FormControl isRequired>
          <FormLabel mb="8px">Type</FormLabel>
          <Select {...field} placeholder="Select Type">
            <option value={'WINDOWS_WORKSTATION'}>Windows Workstation</option>
            <option value={'WINDOWS_SERVER'}>Windows Server</option>
            <option value={'MAC'}>Mac</option>
          </Select>
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )

  const getHddCapacityInput = () => (
    <Field name="hddCapacity">
      {({ field, form }) => (
        <FormControl isRequired>
          <FormLabel mb="8px">HDD Capacity (GB)</FormLabel>
          <Input {...field} size="sm" type="number" />
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )

  const getModalBody = () => {
    return (
      <ModalBody>
        {getSystemNameInput()}
        {getTypeInput()}
        {getHddCapacityInput()}
      </ModalBody>
    )
  }

  return (
    <ChakraModal isOpen={isModalOpen} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Device</ModalHeader>
        <ModalCloseButton />

        <Formik
          initialValues={{
            systemName: devices.currentDevice?.system_name,
            type: devices.currentDevice?.type,
            hddCapacity: devices.currentDevice?.hdd_capacity
          }}
          onSubmit={(values, actions) => {
            handleSave(values)
            actions.setSubmitting(false)
          }}
        >
          {(props) => (
            <Form>
              {getModalBody()}

              <ModalFooter>
                <Button
                  isLoading={props.isSubmitting}
                  colorScheme="blue"
                  mr={3}
                  type="submit"
                >
                  Save
                </Button>
                <Button variant="ghost" onClick={onCloseModal}>
                  close
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ChakraModal>
  )
}
