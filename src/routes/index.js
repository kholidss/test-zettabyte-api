import express from 'express'
import healthRouter from './health.router'
import articleRouter from './article.router'
import commentRouter from './comment.router'

const router = express.Router()

router.use('/healthcheck', healthRouter)
router.use('/article', articleRouter)
router.use('/comment', commentRouter)

export default router
