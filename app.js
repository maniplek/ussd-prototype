const express = require('express');
const ussdRoute = require('./index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// KQw0n000qV6ig7Dh


const app = express();

//model 
const user = require('./model/user');
//const bank = require('./model/banks');

//mongo connection 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



const port = process.env.PORT || 6000;
app.listen(port, ()=> {console.log(`We're running on port ${port}... `)});
app.use('/',ussdRoute);