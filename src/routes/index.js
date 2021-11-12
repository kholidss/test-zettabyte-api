import express from 'express'
import healthRouter from './health.router'
import registerRouter from './register.router'
import loginRouter from './login.router'

const router = express.Router()

router.use('/healthcheck', healthRouter)
router.use('/register', registerRouter)
router.use('/login', loginRouter)

export default router
