const express = require('express');
const { body } = require('express-validator');
const AuthController = require('../controllers/auth');

const router = express.Router();

router.post('/sign-in', body('firstName').isString(), body('lastName').isString(), body('email').isEmail(), body('password').isLength({
    min: 8,
    max: 24
}), AuthController.register);
router.post('/login', body('email').isEmail(), body('password').isLength({
    min: 8,
    max: 24
}), AuthController.login);



module.exports = router;
