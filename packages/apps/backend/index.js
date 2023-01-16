import consign from 'consign'
import express from 'express'

const app = express()

consign()
  .include('libs/middlewares.js')
  .then('routes')
  .include('libs/boots.js')
  .into(app)
