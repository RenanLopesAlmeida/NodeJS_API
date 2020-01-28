const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});


mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error)=>{
    console.log('ERRO:'+error.message);
    
});

//require('./models/Post');


const app = require('./app');
app.set('port', process.env.PORT || 3333);
const server = app.listen(app.get('port', (req, res)=>{
    console.log('Servidor rodando na porta: '+ server.address().port);
    
}))