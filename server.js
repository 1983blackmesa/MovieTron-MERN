require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');


const app = express(); //create express app
//middleware functions
app.use(express.json()); //pass JSON request
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true
}))

// Middleware Routes
app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/upload'));
app.use('/api', require('./routes/movie-router'));



// Connect to mongodb
const URI = process.env.MONGODB_URL; //pass to .env file
mongoose.connect(URI, {
    //useCreateIndex: true,
    //useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb"); //connected to mongo cloudb
})

/* 
//For Production use when site goes live 
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
*/

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT) //listen port 5000 in the backend
})
