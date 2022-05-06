const mongoose = require('mongoose')

//user model for admin and regular user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/drkuybvcy/image/upload/v1651444445/avatar/r21zhw4r86u7giuodnaf.jpg"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)