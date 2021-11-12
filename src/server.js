import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import index from './routes/index'
import errorHandler from './middlewares/error.middleware'
import connectMongo from './config/mongoconnect'

dotenv.config()
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', index)
app.use(errorHandler)

app.use((req, res) => {
  res.status(404).json({ status: 404, message: 'Page not found' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})

connectMongo()
