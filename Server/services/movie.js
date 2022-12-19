const Movie=require('../models/movie')

class MovieService{
  static async getAll(){
        return Movie.findAll()
    }
    static async create(payload){
     return Movie.create(payload)
    }
    static async getById(id){
      return Movie.findByPk(id)
    }
    static async remove(id){
        return Movie.findByPk(id)
    }
}
module.exports=MovieService