import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('<h1>Hello!</h1>')
})

app.post('/api/:v', (req, res) => {
  res.send({ body: req.body, params: req.params })
})

app.listen(3000, () => {
  console.log('http://localhost:3000/')
})

export const start = () => {}
