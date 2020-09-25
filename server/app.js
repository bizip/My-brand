import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postroute from './routes/posts';
import questionroute from './routes/question';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comments';


const app = express();

require('dotenv').config();
let port = process.env.PORT;
let host = process.env.HOST;
let db_ur = process.env.DB_URL;


app.use(bodyParser.json());
app.use('/', postroute);
app.use(questionroute);
app.use(authRoutes);
app.use(commentRoutes);
app.use(cookieParser());
//cookies
app.get('/set-cookies', (req, res) => {
    res.cookie('newUser', false);
    res.cookie('isPascal', true);
    res.json("you got the cookies");
});

app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    res.json(cookies);
});


//mongoose connection
mongoose.connect(db_ur, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(result => {

    //listerning the server after database is connected
    app.listen(port, host, err => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Server is listerning on ${port} ${host}`);
        }
    });
}).catch(err => {
    console.log(err);
});