import mongoose from "mongoose"

// User Model
const User = mongoose.model('User', new mongoose.Schema({
    email: {type:String, required:true},
    username: {type:String, required:true},
    password: {type:String, required:true}
}))

export default User