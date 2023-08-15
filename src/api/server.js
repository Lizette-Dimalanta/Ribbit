import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import cors from 'cors'
// import dotenv from 'dotenv'

// dotenv.config()
mongoose.connect('mongodb+srv://dbUser1:jVlPnrOeMRQBM9rd@cluster0.temziy2.mongodb.net/ribbit') // Connection string
  .then((m) => console.log(m.connection.readyState === 1 ? 'Mongoose connected!' : 'Mongoose failed to connect')) // Check connection
  .catch((err) => console.log(err))

const app = express()
app.use(bodyParser.urlencoded({ extended:true }))
app.use(cookieParser())
app.use(cors({
    origin: 'localhost:3000',
    credentials: true
}))

const db = mongoose.connection
db.on('error', console.log)

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(4000)
