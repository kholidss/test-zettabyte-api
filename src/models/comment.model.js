import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const schema = mongoose.Schema

// eslint-disable-next-line new-cap
const commentSchema = new schema(
  {
    username: {
      type: String,
      required: true,
    },

    comment: {
      type: String,
      required: true,
    },

    article: {
      type: schema.Types.ObjectId,
      ref: 'Article',
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

commentSchema.plugin(aggregatePaginate)

const CommentModel = mongoose.model('Comment', commentSchema)
// eslint-disable-next-line import/prefer-default-export
export { CommentModel }
