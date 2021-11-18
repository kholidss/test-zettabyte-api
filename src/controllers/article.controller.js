/* eslint-disable no-cond-assign */
import { ArticleModel } from '../models/article.model'
import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'

const getAllArticle = async (req, res) => {
  try {
    const filter = {}

    const configCustom = {
      docs: 'data',
    }

    if (req.query.title) {
      filter.title = { $regex: `.*${req.query.title}.*` }
    }

    if (req.query.category) {
      filter.category = { $regex: `.*${req.query.category}.*` }
    }

    let sortBy
    if (req.query.sort_by === 'title.asc') {
      sortBy = { title: 'asc' }
    }
    if (req.query.sort_by === 'title.desc') {
      sortBy = { title: 'desc' }
    }

    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      customLabels: configCustom,
      populate: 'comments',
      sort: sortBy || { created_at: 'desc' },
    }

    const articleAggregate = ArticleModel.aggregate()
    articleAggregate.match(filter)

    await ArticleModel.aggregatePaginate(articleAggregate, options).then((data) => {
      res.status(200).json({
        code: 200,
        success: true,
        message: 'Success get article data',
        data,
      })
    })
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

const getAllArticleById = async (req, res) => {
  try {
    const findIdArticle = await ArticleModel.findById(req.params.id, (err, doc) => {
      if (!doc) {
        res.status(404).json({
          code: 404,
          success: false,
          message: 'Article not found!',
          data: null,
        })
      }
    })
    return res.json(BaseResponse.success('Success get article data by id!', findIdArticle))
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

const createArticle = async (req, res) => {
  try {
    const newArticle = new ArticleModel(req.body)
    const saveArticle = await newArticle.save()
    return res.json(BaseResponse.success('Success create article!', saveArticle))
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

const updateArticle = async (req, res, next) => {
  try {
    const updateArticleSave = await ArticleModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { upsert: true },
      (err, doc) => {
        if (!doc) {
          res.status(404).json({
            code: 404,
            success: false,
            message: 'Article not found!',
            data: null,
          })
        }
      }
    )
    return res.json(BaseResponse.success('Success update article!', updateArticleSave))
  } catch (error) {
    next(error)
  }
}

const deleteArticle = async (req, res, next) => {
  try {
    await ArticleModel.deleteOne({ _id: req.params.id }, (err, doc) => {
      if (!doc) {
        res.status(404).json({
          code: 404,
          success: false,
          message: 'Article not found!',
          data: null,
        })
      }
    })
    return res.json(BaseResponse.success('Success delete article!'))
  } catch (error) {
    next(error)
  }
}

export default { getAllArticle, getAllArticleById, createArticle, updateArticle, deleteArticle }
