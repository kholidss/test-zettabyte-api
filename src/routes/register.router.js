import express from 'express'
import registerController from '../controllers/register.controller'
import registerValidator from '../utils/validations/register.validation'
import validation from '../middlewares/validation.middleware'

const router = express.Router()

router.post('/', validation(registerValidator), registerController.register)

export default router
