const express = require('express');
const ussdRoute = require('./index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//model 
const user = require('./model/user');
//const bank = require('./model/banks');

//mongo connection 
// const database_url = 'mongodb://localhost:27017/job-ussd';
// mongoose.connect(database_url);
// const db = mongoose.connection;
// db.on('error',(err)=>{
//  console.log(err);
// });
// db.once('open',()=>{
//     console.log('Database is running...');
// });

module.exports = function(){
    mongoose.connect("mongodb+srv://admin:admin@cluster0.a9jkr.mongodb.net/admin?retryWrites=true&w=majority",
                    { useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=> console.log('Connected to mongodb.....')).catch((e) => {
                console.log('Unexpected error occured while connecting to mongodb', e);
            });
          
    }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



const port = process.env.PORT || 6000;
app.listen(port, ()=> {console.log(`We're running on port ${port}... `)});
app.use('/',ussdRoute);