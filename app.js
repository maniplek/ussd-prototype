const express = require('express');
const ussdRoute = require('./index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//model 
const user = require('./model/user');
//const bank = require('./model/banks');

const { MONGOURI} = require('./keys');

//mongo connection 
mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('err connecting....',err);
})
mongoose.connection.on('error',()=>{
    console.log('Connected to MongoDb....');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



const port = process.env.PORT || 6000;
app.listen(port, ()=> {console.log(`We're running on port ${port}... `)});
app.use('/',ussdRoute);