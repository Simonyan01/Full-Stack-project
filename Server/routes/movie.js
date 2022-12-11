import express from 'express';
import {body} from 'express-validator';
import {MovieController} from '../controllers/movie';

const router = express.Router();

router.post('/add', body('title').isString(), body('age').isInt(), body('date').isDate(), body('country').isDate(), body('genre').isString(), body('duration').isInt, body('description').isString, body('language').isString, MovieController.create);
router.get('/all', MovieController.getAllMovie);
// router.get('/:id', MovieController.getAll);
// router.put('/update/:id', MovieController.update);
// router.delete('/remove/:id', MovieController.remove);
module.exports = router;