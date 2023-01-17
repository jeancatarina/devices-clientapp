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

import { useAppThunkDispatch } from 'App/store'
import { postDeviceAsync } from 'App/store/modules/devices/devicesThunk'

import { iModal } from './iModal'

export const Modal: React.FC<iModal> = ({ isModalOpen, onCloseModal }) => {
  const dispatch = useAppThunkDispatch()

  const handleSave = (val) => {
    dispatch(
      postDeviceAsync({
        system_name: val.systemName,
        type: val.type,
        hdd_capacity: val.hddCapacity
      })
    )
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
            <option value={'Windows Workstation'}>Windows Workstation</option>
            <option value={'Windows Server'}>Windows Server</option>
            <option value={'Mac'}>Mac</option>
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
          initialValues={{ systemName: '', type: '', hddCapacity: '' }}
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
                  Salvar
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
