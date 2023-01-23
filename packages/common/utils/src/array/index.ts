import { Devices } from '@devices/types'

import { lodash } from '../..'

export const convertStringToNumbers = (objects) => {
  return objects.map((obj) => {
    Object.keys(obj).forEach((key) => {
      if (!isNaN(parseFloat(obj[key])) && isFinite(obj[key])) {
        obj[key] = parseFloat(obj[key])
      }
    })
    return obj
  })
}

export const sortArrayByString = (array, text) => {
  return lodash.sortBy(array, (val) => val[text].toLowerCase?.() || val[text])
}

export const filterDeviceArrayByStringArray = (
  array: Devices,
  objArray: { value: string; label: string }[]
) => {
  return array.filter((device) =>
    objArray?.some(
      (item) => item.value.toLowerCase?.() === device.type.toLowerCase?.()
    )
  )
}
