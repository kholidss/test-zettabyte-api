import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const schema = mongoose.Schema

// eslint-disable-next-line new-cap
const articleSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    comments: [
      {
        type: schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

articleSchema.plugin(aggregatePaginate)

const ArticleModel = mongoose.model('Article', articleSchema)
// eslint-disable-next-line import/prefer-default-export
export { ArticleModel }
