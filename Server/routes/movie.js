const express = require('express');
const {body} = require('express-validator');
const MovieController = require('../controllers/movie');

const router = express.Router();

router.get('/',MovieController.getAll)
router.get('/:id',MovieController.getById)
router.post('/',MovieController.create)
module.exports=router