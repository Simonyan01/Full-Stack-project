const {validationResult} = require('express-validator');
const MovieService = require('../services/movie');
const ApiError = require('../libs/errors/apiError');
const httpStatusCode = require('../libs/constants/http-Status-Codes');

class MovieController {
    async getAllMovie(req, res, next){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.BadRequestError('validation error', errors.array()));
        }
        return MovieService.getAllMovie();
    }
   async create(req, res, next){
       const {title, date, age, country, genre, duration, description, language} = req.body;
       let Movie = await MovieService.create(title, date, age, country, genre, duration, description, language);
       if (Movie) {
           res.send(Movie).status(201);
       }
   }
}
export {MovieController};