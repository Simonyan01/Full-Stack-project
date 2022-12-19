const express = require('express');
const {body} = require('express-validator');
const AuthController = require('../controllers/auth');

const router = express.Router();

router.post('/sign-in', body('firstName').isString(), body('lastName').isString(), body('email').isEmail(), body('password').isLength({
    min: 4,
    max: 20
}), AuthController.register);
router.post('/login', body('email').isEmail(), body('password').isLength({
    min: 4,
    max: 20
}), AuthController.login);

module.exports = router;
