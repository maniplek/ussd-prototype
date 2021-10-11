const express = require('express');
//const mongoose = require('mongoose');
//  const { user } = require('./model/user');
// const user = require ('./model/user')


const {User, validate} = require('./model/user');

const router = express.Router();

// const credentials = {
//     apiKey: 'bd8e6ca0f4d69c45ea680220b065e8faf73308929c15c5b5c90b4cbdb0463077',// use your sandbox app API key for development in the test environment
//     username: 'sandbox',      // use 'sandbox' for development in the test environment
// };
// const Africastalking = require('africastalking')(credentials);

router.post('/', async (req,res) => {
    // Read variables sent via POST from our SDK
    const {sessionId, serviceCode, PhoneNumber, text  } = req.body;

    let response = "";
    //console.log(sessionId, text);
    if (text === ""){
        console.log(text);
        // This is the first request. Note how we start the response with CON
        response = `CON Welcome to e-trans
           1. Create An Account 
           2. LOGIN`
    }else if (text === "1"){
        // first level response
        response = `CON Enter your Fist Name `
        return res.send(response);    
    }   
    else if (text && text.split('*').length === 2 && text.split('*')[0] == 1){
    response = `CON Enter your Passcode`
    validate(req.body); 
       return res.send(response);
   }
   else if (text && text.split('*').length === 3 && text.split('*')[0] == 1){

    const name = text.split('*')[1];
    const password = text.split('*')[2];
    const user = new User({
        passcode: password,
        firstName: name
    });
    user.save();
    response = `END Account Created succesfully`
   }
   
   
   /* LOGIN */
   else if (text ===  "2"){
        response = `CON Enter passcode`;

   }
   else if(text && text.split('*').length === 2 && text.split('*')[0] == 2){
    console.log('>>>>>', text);
    response = `CON select your bank
      1. AB BANK`
   }else if(text && text.split('*').length === 3 && text.split('*')[0] == 2){
       response = `CON Enter your account number `
       console.log('>>>>>', text);
   }else if(text && text.split('*').length === 4 && text.split('*')[0] == 2){
    console.log('>>>>>', text);
       response = `CON Make a choice 
          1. SEND money 
          2. BUY AIRTIME`
   }else if(text && text.split('*').length === 5 && text.split('*')[0] == 2) {
       response =  `CON Enter The amount `
       console.log('>>>>>', text);

   }else if (text && text.split('*').length === 6 && text.split('*')[0] == 2){
    response =  `CON Enter ACCOUNT NUMBER TO SEND MONEY  `
    console.log('>>>>>', text);
   }
    else if (text && text.split('*').length === 7 && text.split('*')[0] == 2){
    response =  `CON Please Enter Your PIN  `
    console.log('>>>>>', text);
   }
   else if(text && text.split('*').length === 8 && text.split('*')[0] == 2){
       response = `CON ARE U SURE YOU TO SEND MONEY TO THAT ACCOUNT
          1. Yes 
          2. No`
        }
   else if(text && text.split('*').length === 9 && text.split('*')[0] == 2){
    response = `CON Please Enter Your PIN`
       console.log('>>>>>', text); }


      else if (text && text.split('*').length === 10 && text.split('*')[0] == 2){
    response = ` CON THANK YOU'VE successfully send money  on this Acount 90000899 
          \n Your New balance is: 3,000,000 RFW
          \n 0.TO CONTINUE`
    console.log('>>>>>', text);
    }else if (text && text.split('*').length === 11 && text.split('*')[0] == 2){
        response = `END THANK YOU FOR WORKING WITH US
                    AB BANK.`
                    console.log('>>>>>', text);
    }



      // Print the response into the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
  // DONE!!!
});
module.exports = router;





// const credentials = {
//     apiKey: 'bd8e6ca0f4d69c45ea680220b065e8faf73308929c15c5b5c90b4cbdb0463077',// use your sandbox app API key for development in the test environment
//     username: 'sandbox',      // use 'sandbox' for development in the test environment
// };
// const Africastalking = require('africastalking')(credentials);







