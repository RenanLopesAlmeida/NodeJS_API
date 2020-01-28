const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error)=>{
    console.log('ERRO:'+error.message);
    
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);