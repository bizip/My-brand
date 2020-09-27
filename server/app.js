import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postroute from './routes/posts';
import questionroute from './routes/question';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comments';
import helmet from 'helmet';
import compression from 'compression';


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
app.use(helmet());
app.use(compression());

//adding 404 page when page not found and Error handling midle ware
app.use((req, res, next) => {
    res.status(404).json({
        Message: "Page not found."
    });
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