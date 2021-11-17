import express from 'express'
import articleController from '../controllers/article.controller'
import validation from '../middlewares/validation.middleware'
import articleValidator from '../utils/validations/article.validation'

const router = express.Router()

router.get('/', articleController.getAllArticle)
router.get('/:id', articleController.getAllArticleById)
router.post('/', validation(articleValidator), articleController.createArticle)
router.put('/:id', validation(articleValidator), articleController.updateArticle)
router.delete('/:id', articleController.deleteArticle)

export default router
