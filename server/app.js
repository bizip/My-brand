import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

require('dotenv').config();
let port = process.env.PORT;
let host = process.env.HOST;
let db_ur = process.env.DB_URL;


app.use(bodyParser.json());
// app.use('/', postroute);


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