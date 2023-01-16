import {
  addDevice,
  deleteDevice,
  getDevice,
  getDevices,
  updateDevice
} from '../controllers/devices'

module.exports = (app) => {
  app.route('/devices').get(getDevices).post(addDevice)

  app
    .route('/devices/:id')
    .get(getDevice)
    .put(updateDevice)
    .delete(deleteDevice)
}
