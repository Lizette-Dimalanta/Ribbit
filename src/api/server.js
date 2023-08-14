import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import * as mongoose from 'mongoose'
import cors from 'cors'
// import dotenv from 'dotenv'

// dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({ extended:true }))
app.use(cookieParser())
app.use(cors({
    origin: 'localhost:3000',
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(4000)
