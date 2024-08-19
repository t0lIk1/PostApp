const {body} = require('express-validator');


const registrationValidator = [
  body('name').isString().isLength({ min: 2 }).withMessage('Name is required min 2').exists(),
  body('email').isEmail().withMessage('eamil is uncorrect').exists(),
  body('password').isString().isLength({ min: 8 }).withMessage('password min 8 symb').exists(),
]

const loginValidator = [
  body('email').isEmail().withMessage('eamil is uncorrect').exists(),
  body('password').isString().isLength({ min: 8 }).withMessage('password min 8 symb').exists(),
]


module.exports = {
  registrationValidator,
  loginValidator
}