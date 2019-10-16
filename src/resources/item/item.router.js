import { Router } from 'express'

const router = Router()
router
  .route('/')
  .get((req, res) => {
    res.send('Hi')
  })
  .post((req, res) => {
    res.send({ message: 'hi' })
  })

router
  .route('/:id')
  .get((req, res) => {
    res.send('hello id')
  })
  .post((req, res) => {
    res.send({ message: 'with id' })
  })
  .put((req, res) => {
    res.send({ message: 'trying to put uh?' })
  })
  .delete((req, res) => {
    res.send({ message: 'Attempting to delete...' })
  })

export default router
