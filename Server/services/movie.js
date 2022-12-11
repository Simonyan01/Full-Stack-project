const Movie = require('../models/movie');

async function getAllMovie(){
    return Movie.findAll()
}
async function create(title, date, age, country, genre, duration, description, language){
  const hey= await Movie.findOne({where:{title,date,duration}})
    console.log(hey);
   return Movie.create({title, date, age, country, genre, duration, description, language})
}
export {getAllMovie,create}
