import express from 'express'
import commentController from '../controllers/comment.controller'
import validation from '../middlewares/validation.middleware'
import commentValidator from '../utils/validations/comment.validation'

const router = express.Router()

router.get('/', commentController.getAllComment)
router.get('/:id', commentController.getCommentById)
router.post('/', validation(commentValidator), commentController.createComment)
router.put('/:id', validation(commentValidator), commentController.updateComment)
router.delete('/:id', commentController.deleteComment)

export default router
