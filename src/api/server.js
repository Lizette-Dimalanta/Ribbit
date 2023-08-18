import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './models/User.js'
// import dotenv from 'dotenv'

// dotenv.config()
mongoose.connect('mongodb+srv://dbUser1:jVlPnrOeMRQBM9rd@cluster0.temziy2.mongodb.net/ribbit') // Connection string
  .then((m) => console.log(m.connection.readyState === 1 ? 'Mongoose connected!' : 'Mongoose failed to connect')) // Check connection
  .catch((err) => console.log(err))

const secret = 'secret123'
const app = express()
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

const db = mongoose.connection
db.on('error', console.log)

app.get('/', (req, res) => {
    res.send('ok')
})

app.post('/register', (req, res) => {
    const {email,username} = req.body
    const password = bcrypt.hashSync(req.body.password, 10)
    const user = new User({email,username,password})
    user.save().then(user => {
        jwt.sign({ id: user._id }, secret, (err, token) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.cookie('token', token).status(201).json({ token });
            }
        });
        res.sendStatus(201).cookie('token', token).status(201).json({ token })
    }).catch(e => {
        console.log(e)
        res.sendStatus(500)
    })
})

app.listen(4000)
