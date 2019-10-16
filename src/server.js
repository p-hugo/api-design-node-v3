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

// Creating custom middleware
app.use((req, res, next) => {
  console.log('Global middleware active')
  req.favNumber = 47 // favNumber then becomes visible in all routes
  next() // passing a parameter will trigger an error
})

// Can use it in individual routes instead of all routes
const localMiddleware = (req, res, next) => {
  console.log('Local middleware active')
  next()
}

app.get('/', (req, res) => {
  res.send(`<h1>Hello!${req.favNumber}</h1>`)
})

app.post('/api/:v', localMiddleware, (req, res) => {
  res.send({ body: req.body, params: req.params })
})

app.listen(3000, () => {
  console.log('http://localhost:3000/')
})

export const start = () => {}
