import { Router } from 'express'

import authRouter from './api/auth'
import storeRouter from './api/store'

const router = Router()

router.use('/auth', authRouter)
router.use('/store', storeRouter)

router.get('/', async (req, res) => {
  res.status(200).send('Api Running')
  }
)

export default router
