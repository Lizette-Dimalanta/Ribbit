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

// Set up Express configuration
const secret = 'secret123'
const app = express() // Initialise Express application
app.use(cookieParser()) // Parse cookies from incoming requests
app.use(bodyParser.urlencoded({ extended:true })) // Handle data encoded in URL-enconded format (middleware)
app.use(bodyParser.json()) // Handle data in JSON format (middleware)
app.use(cors({ // Control how server responds to request from origin
    origin: 'http://localhost:5173', // Allow specified origin for requests
    credentials: true // Allow cookies to be sent along with request
}))

// Mongoose Database Connection
const db = mongoose.connection // Interact with database and listen for events
db.on('error', console.log) // Set up event listener for error events

// Handle HTTP GET requests to root URL
app.get('/', (req, res) => {
    res.send('ok')
})

// Handle HTTP POST requests to '/register/' endpoint
app.post('/register', (req, res) => {
    const {email,username} = req.body // Extract email and username from request body
    const password = bcrypt.hashSync(req.body.password, 10) // Hash user's password
    const user = new User({email,username,password}) // Create new user object with email, username and hashed password
    user.save().then(user => { // Save user object to database
        jwt.sign({ id: user._id }, secret, (err, token) => { // Generate JWT based on user ID and secret key
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.cookie('token', token).status(201).json({ token }); // If successful, send token as cookie in JSON response
            }
        });
        res.sendStatus(201).cookie('token', token).status(201).json({ token })
    }).catch(e => { // Executed when error occurs when generating JWT or saving user
        console.log(e)
        res.sendStatus(500)
    })
})

// Start Express server
app.listen(4000)
