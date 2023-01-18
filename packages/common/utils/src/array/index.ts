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
