import shortid from 'shortid'

import devices from '../devices.json'

export function getDevices(req, res) {
  res.json(devices)
}

export function addDevice(req, res) {
  const { system_name, type, hdd_capacity } = req.body
  const newDevice = {
    id: shortid.generate(),
    system_name,
    type,
    hdd_capacity
  }
  devices.push(newDevice)
  res.json(newDevice)
}

export function getDevice(req, res) {
  const { id } = req.params
  const device = devices.find((d) => d.id === id)
  res.json(device)
}

export function updateDevice(req, res) {
  const { id } = req.params
  const { system_name, type, hdd_capacity } = req.body
  let updated = false
  devices.forEach((device) => {
    if (device.id === id) {
      device.system_name = system_name
      device.type = type
      device.hdd_capacity = hdd_capacity
      updated = true
    }
  })
  res.json(updated ? 1 : 0)
}

export function deleteDevice(req, res) {
  const { id } = req.params
  let deleted = false
  devices.forEach((device, i) => {
    if (device.id === id) {
      devices.splice(i, 1)
      deleted = true
    }
  })
  res.json(deleted ? 1 : 0)
}
