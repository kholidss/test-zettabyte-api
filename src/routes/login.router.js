import express from 'express'
import loginController from '../controllers/login.controller'
import validation from '../middlewares/validation.middleware'
import loginValidator from '../utils/validations/login.validation'

const router = express.Router()

router.post('/', validation(loginValidator), loginController.login)

export default router
