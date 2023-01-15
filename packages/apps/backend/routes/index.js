module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({
      response: 'Devices Api Works!'
    })
  })
}
