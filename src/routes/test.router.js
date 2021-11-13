import express from 'express'
import testController from '../controllers/test.controller'
import auth from '../middlewares/auth.middleware'

const router = express.Router()

router.get('/', auth, testController.test)

export default router
