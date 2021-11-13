import express from 'express'
import fileController from '../controllers/file.controller'
import auth from '../middlewares/auth.middleware'
import validation from '../middlewares/validation.middleware'
import fileValidator from '../utils/validations/file.validation'

const router = express.Router()

router.post('/', auth, validation(fileValidator), fileController.createFile)

export default router
