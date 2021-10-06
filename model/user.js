const mongoose = require('mongoose');
const Joi = require('joi');


const userSchema = mongoose.Schema({
  firstName:String,
  passcode : {
      type:Number,
      require: true,
      minleght:5,
      maxlength:5
    }
 
}) ;
const User = mongoose.model('User', userSchema);

/**
 * Function to validate body
 * @param {Object} user body to be validated
 * @returns resolts of validation
 */

function validationUser(user){
  const schema =Joi.object({
    firstName: Joi.string().min(5).max(255).required(),
    passcode: Joi.number().max(5).required(),


  });
  return schema.validate(user);
}
exports.validate = validationUser;
exports.User = User;
