/* eslint-disable consistent-return */
import { ArticleModel } from '../models/article.model'
import { CommentModel } from '../models/comment.model'
import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'

const getAllComment = async (req, res) => {
  try {
    const filter = {}

    const configCustom = {
      docs: 'data',
    }

    if (req.query.username) {
      filter.username = { $regex: `.*${req.query.username}.*` }
    }

    if (req.query.comment) {
      filter.comment = { $regex: `.*${req.query.comment}.*` }
    }

    let sortBy
    if (req.query.sort_by === 'username.asc') {
      sortBy = { username: 'asc' }
    }
    if (req.query.sort_by === 'username.desc') {
      sortBy = { username: 'desc' }
    }

    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      customLabels: configCustom,
      sort: sortBy || { created_at: 'desc' },
    }

    const commentAggregate = CommentModel.aggregate()
    commentAggregate.match(filter)

    CommentModel.aggregatePaginate(commentAggregate, options).then((data) => {
      res.status(200).json({
        code: 200,
        success: true,
        message: 'Success get comment data',
        data,
      })
    })
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

const getCommentById = async (req, res) => {
  try {
    const findIdComment = await CommentModel.findById(req.params.id, (err, doc) => {
      if (!doc) {
        res.status(404).json({
          code: 404,
          success: false,
          message: 'Comment not found!',
          data: null,
        })
      }
    })
    return res.json(BaseResponse.success('Success get comment data by id!', findIdComment))
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

const createComment = async (req, res) => {
  try {
    const newComment = new CommentModel(req.body)
    const article = await ArticleModel.findById(req.body.article_id)
    newComment.article = article
    await newComment.save()
    article.comments.push(newComment)
    await article.save()
    // const newComment = new CommentModel(req.body)
    // const saveComment = await newComment.save()
    return res.json(BaseResponse.success('Success create comment!', newComment))
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

const updateComment = async (req, res, next) => {
  try {
    const updateCommentSave = await CommentModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { upsert: true },
      (err, doc) => {
        if (!doc) {
          res.status(404).json({
            code: 404,
            success: false,
            message: 'Comment not found!',
            data: null,
          })
        }
      }
    )
    return res.json(BaseResponse.success('Success update comment!', updateCommentSave))
  } catch (error) {
    next(error)
  }
}

const deleteComment = async (req, res, next) => {
  try {
    await CommentModel.deleteOne({ _id: req.params.id }, (err, doc) => {
      if (!doc) {
        res.status(404).json({
          code: 404,
          success: false,
          message: 'Comment not found!',
          data: null,
        })
      }
    })
    return res.json(BaseResponse.success('Success delete comment!'))
  } catch (error) {
    next(error)
  }
}

export default { getAllComment, getCommentById, createComment, updateComment, deleteComment }
