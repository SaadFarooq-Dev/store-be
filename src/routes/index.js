import { Router } from 'express'

import authRouter from './api/auth'

const router = Router()

router.use('/auth', authRouter)

router.get('/', async (req, res) => {
  res.status(200).send('Api Running')
  }
)

export default router
